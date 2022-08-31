import { Typography } from "@mui/material"
import "./headerFooter.css"
// import team from "../images/team.jpeg"

export default function Footer(){
  return(
    <div className="footerMain">
      <Typography sx={{fontSize:{xs:'1.5rem', md:'1.6rem'}}}>Gino Leone - GlobalJobsList</Typography>
    </div>
  )
}