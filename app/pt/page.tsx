import type {Metadata} from 'next';
import {Landing} from '../landing';
export const metadata:Metadata={title:'perfratio — Toda otimização tem um custo.',description:'Benchmarking de linha de comando: tempo, memória, energia e estatística.'};
export default function Portuguese(){return <div lang="pt-BR"><Landing pt/></div>;}
