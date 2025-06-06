'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Loader2, User, Bot } from 'lucide-react';
import { chatbotInteraction, type ChatbotInput, type ChatbotOutput } from '@/ai/flows/chatbot-flow';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

type ChatState = ChatbotInput['currentState'];

interface ChatbotWidgetProps {
  languageCode: string;
}

export function ChatbotWidget({ languageCode = 'en' }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatState, setChatState] = useState<ChatState>('GREETING');
  const [isLoading, setIsLoading] = useState(false);
  const [collectedMobile, setCollectedMobile] = useState<string | undefined>(undefined);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const translations = {
    en: { title: "Chat Assistant", placeholder: "Type your message...", send: "Send" },
    mr: { title: "चॅट सहाय्यक", placeholder: "तुमचा संदेश टाइप करा...", send: "पाठवा" },
    hi: { title: "चैट सहायक", placeholder: "अपना संदेश टाइप करें...", send: "भेजें" },
    kn: { title: "ಚಾಟ್ ಸಹಾಯಕ", placeholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...", send: "ಕಳುಹಿಸಿ" },
    ta: { title: "அரட்டை உதவியாளர்", placeholder: "உங்கள் செய்தியைத் தட்டச்சு செய்க...", send: "அனுப்பு" },
    bn: { title: "চ্যাট সহকারী", placeholder: "আপনার বার্তা টাইপ করুন...", send: "পাঠান" },
    gu: { title: "ચેટ સહાયક", placeholder: "તમારો સંદેશ ટાઇપ કરો...", send: "મોકલો" },
  };

  const t = translations[languageCode as keyof typeof translations] || translations.en;

  const handleBotInteraction = useCallback(async (userInput: string, currentChatState: ChatState) => {
    setIsLoading(true);
    try {
      const flowInput: ChatbotInput = {
        userInput,
        currentState: currentChatState,
        languageCode,
        collectedMobile,
      };
      const result: ChatbotOutput = await chatbotInteraction(flowInput);
      
      setMessages(prev => [...prev, { id: Date.now().toString() + '_bot', text: result.botResponse, sender: 'bot' }]);
      setChatState(result.nextState);
      if (result.collectedMobile) {
        setCollectedMobile(result.collectedMobile);
      }
      // if (result.leadCreated) { console.log("Lead created/simulated for:", result.collectedMobile); }

    } catch (error) {
      console.error("Chatbot interaction error:", error);
      const errorMsg = languageCode === 'mr' ? "क्षमस्व, काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा." : 
                       languageCode === 'hi' ? "क्षमा करें, कुछ गलत हो गया। कृपया पुनः प्रयास करें।" : 
                       "Sorry, something went wrong. Please try again.";
      setMessages(prev => [...prev, { id: Date.now().toString() + '_bot_err', text: errorMsg, sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  }, [languageCode, collectedMobile]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0 && chatState === 'GREETING') {
      handleBotInteraction("InitialGreeting", "GREETING");
    }
  }, [isOpen, messages.length, chatState, handleBotInteraction]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const newUserMessage: Message = { id: Date.now().toString() + '_user', text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    const currentInputValue = inputValue;
    setInputValue('');
    
    await handleBotInteraction(currentInputValue, chatState);
  };
  
  if (!isOpen) {
    return (
      <Button
        onClick={handleToggleChat}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg z-50 bg-primary hover:bg-primary/90 text-primary-foreground"
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-[340px] h-[500px] shadow-xl z-50 flex flex-col rounded-lg border border-border bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <CardTitle className="text-md font-semibold text-primary">{t.title}</CardTitle>
        <Button variant="ghost" size="icon" onClick={handleToggleChat} className="h-7 w-7 text-muted-foreground hover:text-foreground">
          <X size={18} />
        </Button>
      </CardHeader>
      <CardContent className="p-0 flex-grow overflow-hidden">
        <ScrollArea className="h-full p-3" ref={scrollAreaRef}>
          <div className="space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] py-2 px-3 rounded-lg text-sm flex items-start gap-2 shadow-sm ${
                    msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted text-foreground rounded-bl-none'
                }`}>
                  {msg.sender === 'user' ? <User size={16} className="flex-shrink-0 mt-0.5" /> : <Bot size={16} className="flex-shrink-0 mt-0.5 text-primary" />}
                  <span className="whitespace-pre-wrap">{msg.text}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[75%] py-2 px-3 rounded-lg bg-muted text-foreground flex items-center gap-2 shadow-sm rounded-bl-none">
                  <Bot size={16} className="flex-shrink-0 text-primary" />
                  <Loader2 size={16} className="animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-3 border-t border-border">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex w-full items-center space-x-2">
          <Input
            ref={inputRef}
            type="text"
            placeholder={t.placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            className="flex-grow h-10"
            autoFocus
          />
          <Button type="submit" size="icon" disabled={isLoading || inputValue.trim() === ''} className="h-10 w-10 shrink-0">
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

    