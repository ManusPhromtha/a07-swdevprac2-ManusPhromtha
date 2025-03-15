'use client'
import { useReducer } from "react";
import Card from './Card'

export default function CardPanel() {
    const compareReducer = ( compareList:Map<string,number>, action:{type:string, venueName:string, score:number})=>{
        switch(action.type) {
            case 'add': {
                compareList.delete(action.venueName)
                return new Map( compareList.set(action.venueName, action.score) )
            }
            case'remove': {
                compareList.delete(action.venueName)
                return new Map(compareList)
            }
            default: return compareList
        }
    }

    const [ compareList, dispatchCompare ] = useReducer( compareReducer, new Map<string,number>())

    return(
        <div>
            <div style={{margin:"20px", display:"flex", justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg' onCompare={(card:string, value:number)=>dispatchCompare({type:'add', venueName:card, score:value})}/>
                <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg' onCompare={(card:string, value:number)=>dispatchCompare({type:'add', venueName:card, score:value})}/>
                <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg' onCompare={(card:string, value:number)=>dispatchCompare({type:'add', venueName:card, score:value})}/>
            </div>

            <div>Compare List: {compareList.size}</div>

            {Array.from(compareList).map( (data)=><div key={ data[0] } data-testid={data[0]} onClick={()=>{ dispatchCompare({type:'remove', venueName:data[0], score:5})}}>{data[0] + " Rating:" + data[1]}</div>)}
        </div>
    );
}