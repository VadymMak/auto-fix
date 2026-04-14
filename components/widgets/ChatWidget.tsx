'use client';

import { useState, useRef, useEffect } from 'react';
import { CHAT_CONFIG } from '@/lib/constants';
import type { ChatMessage } from '@/lib/types';
import styles from './ChatWidget.module.css';

const RESPONSES: Record<string, string> = {
  'cenník služieb': 'Naše ceny začínajú od €15. Kompletný cenník nájdete v sekcii Cenník na tejto stránke, alebo vám ho pošlem priamo. Chcete sa objednať?',
  'objednať termín': 'Super! Môžete vyplniť formulár v sekcii "Objednať" na tejto stránke, alebo nás zavolajte na +421 32 XXX XXXX. Aký druh servisu potrebujete?',
  'otváracie hodiny': 'Sme otvorení:\n• Pondelok – Piatok: 7:00 – 18:00\n• Sobota: 8:00 – 13:00\n• Nedeľa: Zatvorené\n\nPribehne vám to?',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'bot-init',
      from: 'bot',
      text: CHAT_CONFIG.greeting,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    const uid = ++counterRef.current;
    const userMsg: ChatMessage = {
      id: `u-${uid}`,
      from: 'user',
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const key = text.toLowerCase();
      const responseText =
        Object.entries(RESPONSES).find(([k]) => key.includes(k))?.[1] ??
        'Ďakujem za správu! Kontaktujte nás na +421 32 XXX XXXX alebo sa objednajte online.';

      const botUid = ++counterRef.current;
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `b-${botUid}`,
          from: 'bot',
          text: responseText,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) sendMessage(input.trim());
  };

  return (
    <>
      <button
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat"
      >
        {open ? (
          <span className={styles.fabIcon}>✕</span>
        ) : (
          <span className={styles.fabIcon}>💬</span>
        )}
      </button>

      {open && (
        <div className={styles.widget}>
          <div className={styles.header}>
            <div className={styles.headerDot} />
            <div>
              <div className={styles.headerTitle}>AutoFix Asistent</div>
              <div className={styles.headerSub}>Online · zvyčajne odpovie okamžite</div>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={[
                  styles.msg,
                  msg.from === 'user' ? styles.msgUser : styles.msgBot,
                ].join(' ')}
              >
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}
            {typing && (
              <div className={`${styles.msg} ${styles.msgBot}`}>
                <span className={styles.typing}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className={styles.quickReplies}>
            {CHAT_CONFIG.quickReplies.map((qr) => (
              <button
                key={qr.id}
                className={styles.qr}
                onClick={() => sendMessage(qr.label)}
              >
                {qr.label}
              </button>
            ))}
          </div>

          <form className={styles.inputRow} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napíšte správu…"
            />
            <button type="submit" className={styles.sendBtn} disabled={!input.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}
