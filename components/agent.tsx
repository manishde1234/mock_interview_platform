'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { vapi } from '@/lib/vapi.sdk';
import React, { useEffect, useState } from 'react'

enum CallStatus{
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage{
    role: 'user' | 'system'|'assistant';
    content: string;
}

const Agent = ({userName ,userId, type}: AgentProps) => {

    const rounter = useRouter(); 
    const [isSpeaking, setisSpeaking] = useState(false);
    const [callStatus, setcallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    useEffect(() => {
            const onCallStart = () => setcallStatus(CallStatus.ACTIVE);
            const onCallEnd = () => setcallStatus(CallStatus.FINISHED);

            const onMessage = (message: Message) =>{
                if(message.type ==='transcript' && message.transcriptType === 'final'){
                    const newMessage = {role: message.role, content: message.transcript}

                    setMessages((prev) => [...prev, newMessage]);
                }
            }

            const onSpeachStart = () => setisSpeaking(true);
            const onSpeachEnd = () => setisSpeaking(false);

            const onError = (error: Error) => console.log('Error', error);

            vapi.on('call-start', onCallStart);
            vapi.on('call-end', onCallEnd);
            vapi.on('message', onMessage);
            vapi.on('speech-start', onSpeachStart);
            vapi.on('speech-end', onSpeachEnd);
            vapi.on('error', onError);

            // Call the start function when the component mounts and the end function when it unmounts so it doesn't slow our app
            return() =>{
                vapi.off('call-start', onCallStart);
                vapi.off('call-end', onCallEnd);
                vapi.off('message', onMessage);
                vapi.off('speech-start', onSpeachStart);
                vapi.off('speech-end', onSpeachEnd);
                vapi.off('error', onError);
            }
    },[])

    useEffect(() => {
        if(callStatus === CallStatus.FINISHED){
            rounter.push('/');
        }
    }
    , [messages,callStatus, userId, type]);

    const handleCall = async () => {
        setcallStatus(CallStatus.CONNECTING);
         await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!,{
            variableValues:{
                username: userName,
                userid: userId,
            }
         })
    }

    const handleDisconnect = async () => {
        setcallStatus(CallStatus.FINISHED);
         vapi.stop();
    }
    

    // const isSpeaking = true; // Placeholder for speaking state
    // const callStatus = CallStatus.ACTIVE; // Placeholder for call status
    // const messages =[
    //     'whats your name?',
    //     'my name is vapi',
    // ];
    const lastMessage = messages[messages.length - 1]?.content;
    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

  return (
    <div>
    <div className='call-view'>
        <div className='card-interviewer'>
            <div className='avatar'>
                <Image src="/ai-avatar.png" alt='vapi' 
                height={54} width={65} className='object-cover' />
                {isSpeaking && <span className='animate-speak'/>}

            </div>
            <h3>AI Interviewer</h3>
        </div>

        <div className='card-border'>
            <div className='card-content'>
                <Image src ="/user-avatar.png" alt='user avatar' 
                width={540} height={540}
                className='rounded-full object-cover size-[120px]' />

                <h3>{userName}</h3>
            </div>
        </div>

    </div>

    {messages.length > 0 && (
        <div className='transcript-border' >
            <div className='transcript'>
                <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0',
                    'animate-fadeIn opacity-100'
                )}> 
                    {lastMessage}
                </p>
            </div>
        </div>

    )}

    <div className='w-full flex justify-center'>
        {callStatus !== 'ACTIVE'?(
            <button className='relative btn-call' onClick={handleCall}>
                <span className={cn('absolute animate-ping rounded-full opacity-75',
                    callStatus !== 'CONNECTING' && 'hidden'
                )}
                   />

                    <span>
                    {isCallInactiveOrFinished ?'Call':'...'} 
                    </span>
                
            </button>
        ):(
            <button className='btn-disconnect' onClick={handleDisconnect}>
                End
            </button>
        ) }

    </div>


    </div>
  )
}

export default Agent