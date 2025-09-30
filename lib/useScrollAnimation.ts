'use client'
import { useEffect,useRef } from "react"
export function useScrollAnimation(){
    const ref = useRef<HTMLElement>(null)
    useEffect(()=>{
        const element = ref.current
        if(!element) return
        const observe = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        entry.target.classList.add('visible')
                    }
                })
            },
            {
                threshold:0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )
        observe.observe(element)
        return()=>{
            if(element){
                observe.unobserve(element)
            }
        }
    },[])
    return ref
}