import React, { useState } from 'react';
import './faq.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How accurate are your predictions?",
      answer: "Our predictions have an average accuracy rate of 75-85% for our premium tips. Free tips typically have a 65-75% accuracy rate. However, no prediction can be 100% guaranteed as football matches can be unpredictable."
    },
    {
      question: "How do I subscribe to VIP tips?",
      answer: "You can subscribe to our VIP service by visiting the Subscription page and selecting a plan that suits your needs. We offer daily, weekly, monthly, and yearly subscription options with various payment methods available."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, MPesa, and cryptocurrency. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day money-back guarantee for new subscribers who are not satisfied with our service. Please contact our support team to initiate a refund request."
    },
    {
      question: "How often are tips sent to subscribers?",
      answer: "VIP subscribers receive tips daily, typically 2-4 hours before matches begin. We send predictions via email, SMS, and through our member dashboard."
    },
    {
      question: "Do you offer tips for all leagues?",
      answer: "We cover all major European leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1) as well as select other leagues and tournaments where we identify value opportunities."
    },
    {
      question: "What is your success rate for the season?",
      answer: "Our current season success rate is 82% for VIP tips and 70% for free tips. You can view our performance statistics updated weekly on our website."
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our service</p>
      </div>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="support-cta">
        <h2>Still have questions?</h2>
        <p>Contact our support team for personalized assistance</p>
        <a href="/contact" className="cta-button">Contact Support</a>
      </div>
    </div>
  );
}