import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';


type ColumnProps = {
    title: string;
    links: Array<string>;
}

const Footer = () => {
    const FooterColum = ({title, links}: ColumnProps) =>(
        <div className="footer_column">
            <h4 className='font-semibold'>{title}</h4>
            <ul className="flex flex-col gap-2 font-normal ">
                {links.map((link)=> <Link href="/" key={link}>{link}</Link>)}
            </ul>
        </div>
    )
  return (
    <footer className="flexStart footer"> 
        <div className="flex flex-col gap-12 w-full">
            <div className="flex items-start flex-col">
            <Image src = "/logo.svg" width = {80} height = {40} alt = " Flexbble"/>
            <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                Connect your data sources and deploy a GraphQL API in minutes with the Grafbase SDK.
                Forget YAML files and clunky dashboards.        
            </p>
            </div>
            <div className="flex flex-wrap gap-12">
                <FooterColum title = {footerLinks[0].title} links = {footerLinks[0].links}/>
                <div className='flex-1 flex flex-col gap-4'>
                    <FooterColum title = {footerLinks[1].title} links = {footerLinks[1].links}/>
                    <FooterColum title = {footerLinks[2].title} links = {footerLinks[2].links}/>
                </div>
                <FooterColum title = {footerLinks[3].title} links = {footerLinks[3].links}/>
                <div className='flex-1 flex flex-col gap-4'>
                    <FooterColum title = {footerLinks[4].title} links = {footerLinks[4].links}/>
                    <FooterColum title = {footerLinks[5].title} links = {footerLinks[5].links}/>
                </div>
                <FooterColum title = {footerLinks[6].title} links = {footerLinks[6].links}/>
            </div>
            
            
            
        </div>
        <div className="flexBetween footer_copyright ">
            <p>@ 2023 SeeaScale . All rights reserved </p>
            <p className="text-gray">
                <span className='text-black font-semibold'>10,240</span>projects submitted  
            </p>
        </div>
    </footer>
  )
}

export default Footer