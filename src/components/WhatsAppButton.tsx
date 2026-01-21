import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";
const WEBHOOK_URL = "https://n8n.srv915514.hstgr.cloud/webhook/6688d2c9-ea4a-4870-a08b-cd71175643d7";
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: "assistant",
    content: "👋 Hi there! Welcome to Xen Developments. How can we help you today?",
    timestamp: new Date()
  }]);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;
    const userMessage: ChatMessage = {
      role: "user",
      content: message.trim(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage.content,
          timestamp: userMessage.timestamp.toISOString()
        })
      });
      if (response.ok) {
        const data = await response.json();
        const botResponse: ChatMessage = {
          role: "assistant",
          content: data.message || data.response || "Thank you for your message! We'll get back to you soon.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error("Failed to get response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && <motion.div className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-2xl bg-background shadow-2xl border border-border md:w-96" initial={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }} transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}>
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Xen Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">Usually replies instantly</p>
                </div>
              </div>
              <button onClick={handleToggle} className="rounded-full p-1 hover:bg-white/20 transition-colors" aria-label="Close chat">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-72 overflow-y-auto bg-muted/30 p-4 space-y-4">
              {messages.map((msg, index) => <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`inline-block max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-background border border-border rounded-tl-none"}`}>
                    <p className="text-sm">{msg.content}</p>
                    <span className={`mt-1 block text-right text-xs ${msg.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>)}
              {isLoading && <div className="flex justify-start">
                  <div className="inline-block rounded-2xl rounded-tl-none bg-background border border-border px-4 py-3 shadow-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>}
            </div>

            {/* Input Area */}
            <div className="border-t border-border bg-background p-3">
              <div className="flex items-center gap-2">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type a message..." disabled={isLoading} className="flex-1 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50" />
                <button onClick={handleSendMessage} disabled={!message.trim() || isLoading} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Send message">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Bot Button */}
      <motion.button onClick={handleToggle} className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-colors duration-300 md:h-16 md:w-16 bg-green-700 hover:bg-green-600" initial={{
      scale: 0,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      delay: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }} aria-label={isOpen ? "Close chat" : "Chat with us"}>
        <AnimatePresence mode="wait">
          {isOpen ? <motion.div key="close" initial={{
          rotate: -90,
          opacity: 0
        }} animate={{
          rotate: 0,
          opacity: 1
        }} exit={{
          rotate: 90,
          opacity: 0
        }} transition={{
          duration: 0.2
        }}>
              <X className="h-7 w-7 md:h-8 md:w-8" />
            </motion.div> : <motion.div key="bot" initial={{
          rotate: 90,
          opacity: 0
        }} animate={{
          rotate: 0,
          opacity: 1
        }} exit={{
          rotate: -90,
          opacity: 0
        }} transition={{
          duration: 0.2
        }}>
              <Bot className="h-7 w-7 md:h-8 md:w-8" />
            </motion.div>}
        </AnimatePresence>
      </motion.button>
    </>;
};
export default ChatBotButton;