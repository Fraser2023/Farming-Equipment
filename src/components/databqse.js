import { v4 as uuidv4 } from 'uuid';
import bomb from "../assets/bomblift.jpg"
import comp from "../assets/compaction.webp"
import excavator from "../assets/excavator.jpg"
import forklift from "../assets/forklift.jpg"
import scissorlift from "../assets/scissorlift.jpg"
import roller from "../assets/roller.webp"
export const navLinks = [
    {
        _id: "rtyuoiytsgs",
        link:"Home",
    },
    {
        _id: "rtyduoiytsgs",
        link:"Equipment",
    },
    {
        _id: "rtyuoisytsgs",
        link:"About Us",
    },
    {
        _id: "rmltyuoiytsgs",
        link:"Our Projects",
    },
    {
        _id: "rtyuoiydstsgs",
        link:"Contact Us",
    }
]
export const categories=[
{
    _id:uuidv4(),
    image:excavator,
    category:"Excavators"
},
{
    _id:uuidv4(),
    image:scissorlift,
    category:"SCISSOR LIFT"
},
{
    _id:uuidv4(),
    image:bomb,
    category:"BOOMLIFT"
},
{
    _id:uuidv4(),
    image:comp,
    category:"COMPACTION"
},
{
    _id:uuidv4(),
    image:roller,
    category:"ROLLER"
},
{
    _id:uuidv4(),
    image:forklift,
    category:"FORKLIFT"
}
]