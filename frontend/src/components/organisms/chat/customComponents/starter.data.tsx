import hrIcon from "assets/hr.png"
import supportIcon from "assets/support.png"
import assistIcon from "assets/live_assist.png"
import faqIcon from "assets/faq.jpg"

interface Starter {
  label: string;
  message: string;
  response: string | { question: string; answer: string }[];
  icon: string; // Image path or URL
}
export const startersData: Starter[] = [
    {
      label: "HR Policy Hub",
      message: "Could you ask me about the key areas in HR policy that I should focus on, and then help me draft an outline?",
      response: "Sure! What are the key areas in HR policy that you want to focus on? I'll help you draft a comprehensive outline.",
      icon: hrIcon
    },
    {
      label: "Support Assist",
      message: "Could you ask me what specific issues I'm facing with my software installation, and then guide me through the troubleshooting process?",
      response: "Certainly! What specific issues are you encountering with your software installation? I'll guide you through the troubleshooting process.",
      icon: supportIcon
    },
    {
      label: "Realtime Search Assist",
      message: "Could you ask me which website or data source I need to scrape, and then help me create a Python script to automate it?",
      response: "Sure! Which website or data source do you need to scrape? I'll help you create a Python script to automate the process.",
      icon: assistIcon
    },
    {
      label: "FAQ",
      message: "Could you please tell me what the most Frequestly Asked Questions?",
      response: [
        {"question": "How do I reset my password?", "answer": "Go to the account settings and click 'Reset Password.'"},
        {"question": "Why is my internet connection slow?", "answer": "Try restarting your router and check for any background applications using bandwidth."},
        {"question": "How can I contact support?", "answer": "You can contact support via email at support@company.com."}
    ],
      icon: faqIcon
    }
  ];