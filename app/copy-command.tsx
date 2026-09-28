'use client';
import { useState } from 'react';
export function CopyCommand({command,pt=false}:{command:string;pt?:boolean}) {
 const [status,setStatus]=useState('');
 async function copy(){try{await navigator.clipboard.writeText(command);setStatus(pt?'Copiado':'Copied');}catch{setStatus(pt?'Selecione e copie o comando':'Select and copy the command');}}
 return <div className="command"><code>{command}</code><button onClick={copy} aria-label={pt?'Copiar comando':'Copy command'}>{pt?'Copiar':'Copy'}</button><span className="copy-status" role="status">{status}</span></div>;
}
