export const useCounter = () => useState<number>('counter', ()=>Math.round(Math.random()*50))
export const useColor = ()=> useState<string>('color', ()=>'pink')