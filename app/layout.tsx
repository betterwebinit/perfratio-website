import type {Metadata} from 'next';
import './globals.css';
import {headers} from 'next/headers';
const baseMetadata:Metadata={title:'perfratio — Every optimization has a trade-off.',description:'Command-line benchmarking for the whole picture. Compare time, memory and energy with rigorous statistics. Built with Rust.',openGraph:{title:'perfratio — Every optimization has a trade-off.',description:'Time. Memory. Energy. Statistics.',type:'website',images:[{url:'/og.png',width:1536,height:1024,alt:'perfratio — Every optimization has a trade-off.'}]},icons:{icon:'/favicon.png'},twitter:{images:['/og.png'],card:'summary_large_image',title:'perfratio — Every optimization has a trade-off.'}};
export async function generateMetadata():Promise<Metadata>{const h=await headers();const host=h.get('host')||'perfratio.matbrgz.chatgpt.site';const protocol=host.startsWith('localhost')?'http':'https';return {...baseMetadata,metadataBase:new URL(`${protocol}://${host}`)};}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
