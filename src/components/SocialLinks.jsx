import React from 'react'
import { BsFileEarmarkExcelFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGitlab, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/romain-pailler-34b81a1a6/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitLab <FaGitlab size={30}/>
                </>
            ),
            href:'https://gitlab.com/Romain-Pailler'
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href:'mailto:romain.pailler@icloud.com'
        },
        {
            id: 4,
            child: (
                <>
                    CV <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/CV_Romain_PAILLER-2023.pdf',
            download: true,
        },
        {
            id: 5,
            child: (
                <>
                    Tableau de synthèse <BsFileEarmarkExcelFill size={40}/>
                </>
            ),
            href:'/documentation/Tableau-de-synthese-E4.pdf',
            download:true,
            style: 'rounded-br-md'
        }
    ];
return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map((link) => (
                <li 
                    key={link.id} 
                    className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500" + 
                    " " + 
                    link.style
                    }
                >
                    <a 
                        href={link.href}
                        className='flex justify-between items-center w-full text-white'
                        target={link.download ? '_blank' : undefined}
                        rel={link.download ? 'noopener noreferrer' : undefined}
                    >
                        {link.child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// ...

}

export default SocialLinks