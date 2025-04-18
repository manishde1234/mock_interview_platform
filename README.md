# Prepwise: An AI mock Interview Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is designed to provide a platform for conducting mock interviews with advanced features like AI-powered question generation, real-time feedback, and analytics.

## 🤖 Introduction
Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, Prepwise is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.

## ⚙️ Tech Stack
Next.js  
Firebase  
Tailwind CSS  
Vapi AI  
shadcn/ui  
Google Gemeni  
Zod  
## 🔋 Features
👉 Authentication: Sign Up and Sign In using password/email authentication handled by Firebase.

👉 Create Interviews: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

👉 Get feedback from AI: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

👉 Modern UI/UX: A sleek and user-friendly interface designed for a great experience.

👉 Interview Page: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

👉 Dashboard: Manage and track all your interviews with easy navigation.

👉 Responsiveness: Fully responsive design that works seamlessly across devices.
and many more, including code architecture and reusability

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or an alternative package manager like [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manishde1234/mock-interview-platform.git
   cd mock-interview-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

Start the development server with one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=  
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=  
NEXT_PUBLIC_FIREBASE_PROJECT_ID=  
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=  
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=  
NEXT_PUBLIC_FIREBASE_APP_ID=  

FIREBASE_PROJECT_ID=  
FIREBASE_CLIENT_EMAIL=  
FIREBASE_PRIVATE_KEY=  

Replace the placeholder values with your actual Firebase, Vapi credentials.

Running the Project

npm run dev


Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### File Structure

- `app/page.tsx`: The main entry point for the application. You can start editing the page here.
- `components/`: Contains reusable UI components.
- `pages/`: Contains route-based pages for the application.
- `styles/`: Contains global and component-specific styles.
- `public/`: Static assets like images and icons.



### Linting and Formatting

This project uses ESLint and Prettier for code quality and formatting. Run the following commands to check and fix issues:

```bash
npm run lint
npm run format
```

## Features

- **AI-Powered Question Generation**: Generate interview questions dynamically using AI models.
- **Real-Time Feedback**: Provide instant feedback to users during mock interviews.
- **Analytics Dashboard**: Track user performance and progress over time.
- **Customizable Interview Templates**: Create and manage interview templates for different roles and industries.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for feedback and contributions.

## Testing

Run unit tests and integration tests using the following command:

```bash
npm test
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For manual deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).




