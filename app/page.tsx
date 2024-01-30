"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title, subtitle } from "@/components/primitives";
import { Avatar, Card, CardBody, CardFooter, CardHeader, Code, Divider, Image } from "@nextui-org/react";
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PlaceIcon from '@mui/icons-material/Place';
import { LogoMarrom} from "@/components/icons";

function titleQuemSomos(){
  return(
    <div className=" h-full laranjao">
      <h1 className={`${title()} row-span-1 justify-self-start sm:text-6xl md:text-5xl lg:text-8xl`}>Quem Somos</h1>
    </div>    
  );
}

function quemSomos() {
  return (
    <div className="flex mx-4 my-0 justify-evenly">
      <Card className="py-4 m-0 rounded-lg border-8 border-pessego border-double bg-transparent w-full lg:w-[500px] sm:w-[350px] h-auto lg:h-[300px] sm:h-[250px] shadow-lg shadow-marrom ">
        <CardHeader className="center">
          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '35px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-2xl text-center">
                  Sobre nós
              </h2> 
            <WhatshotIcon sx={{ fontSize: '35px', color: '#601802', marginLeft: '2px' }} />
          </Code>
          
        </CardHeader>
        <CardBody className="grid grid-rows-3 grid-cols-1 gap-4 ">
          <h2 className="icon_label center -ml-6">
            <InfoIcon sx={{  fontSize: '50px' }}></InfoIcon>
            Somos uma cia de dança
          </h2>
          <h2 className="icon_label center">
            <ApartmentIcon sx={{  fontSize: '50px' }}></ApartmentIcon>
            Empresa de pequeno porte
          </h2>
          <h2 className="icon_label center ">
            <GroupsIcon sx={{ fontSize: '50px' }}></GroupsIcon>
            25 integrantes (elenco fixo)
          </h2>
        </CardBody>
      </Card>

      <Card className=" ml-0 rounded-lg border-8 border-pessego border-double bg-transparent w-full lg:w-[500px] sm:w-[400px] lg:h-[350px] sm:h-[350px] shadow-lg shadow-marromVermelho">
        <CardHeader className="center">
          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '35px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-2xl text-center">
                Direção
              </h2>
            <WhatshotIcon sx={{ fontSize: '35px', color: '#601802', marginLeft: '2px' }} />
          </Code>
        </CardHeader>

        <CardBody className=" grid grid-rows-4 grid-cols-1 ">

          <div className="center mb-2">
            <Avatar radius="full" size="lg" src="/imgs/fotoPessoa.png" />
            <div className="flex flex-col items-start justify-center ">
              <h4 className="text-lg font-bold leading-none text-marrom ml-2">Juliana Mascarenhas</h4>
            </div>
          </div>

          <h2 className="icon_label items-center -mb-5">
            <InfoIcon sx={{ fontSize: '40px', color: "#601802" }}></InfoIcon>
            Uma das fundadoras iniciais
          </h2>
          <h2 className="icon_label items-center">
            <StarIcon sx={{ fontSize: '40px', color: "#601802" }}></StarIcon>
            Dançarina e coreógrafa
          </h2>
          <div>
            <h2 className="icon_label items-center">
              <SchoolIcon sx={{ fontSize: '40px', color: "#601802" }}></SchoolIcon>
                Licenciada e Bacharel em Dança 
                 -
                <span className="text-marrom center font-bold items-center -ml-1">
                <PlaceIcon sx={{ fontSize: '20px', color: "#601802" }}></PlaceIcon>
                UFBA
                </span>
            </h2>
            
          </div>
          
        </CardBody>
      </Card>
    </div>
  );
}

function Principal(){
  return(
    <div className="grid grid-rows-3 grid-cols-3 ">

      <div className="w-full h-full flex justify-center row-span-2">
        <Image
          src='/imgs/img2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={300}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

     <div className="flex items-center justify-self-center row-start-1  marrom">
        <h1 className={`${title()} font-serif row-span-1 sm:text-6xl md:text-5xl lg:text-8xl`}>A CIA</h1>
      </div>

     <div className="w-full h-full flex justify-center">
        <Image
          src='/imgs/img2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={300}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

      <div className="w-full h-full mt-6 flex justify-center ">
        <Image
          src='/imgs/img1.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={350}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

      <div className="w-full h-full mt-6 flex justify-center ">
        <Image
          src='/imgs/grupo-danca2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={350}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>
     
    </div>
  );
}

const slidesData = [
  {
    content: Principal(),
  },
  {
    title: titleQuemSomos(),
    content: quemSomos(),
  },
  {
    title: "Nossa História",
    content: "A InFlame foi fundada em outubro de 2012 em Feira de Santana, Bahia, a partir de uma apresentação realizada no Colégio Padre Ovídio pelas alunas do 1º ano. A princípio, definiu-se como um grupo de dança o qual participava de eventos culturais da cidade. Em 2018, estabeleceu-se como companhia e tem como foco a realização de eventos, espetáculos, oficinas e aulas regulares de dança.",
  },
];

export default function SobreNos() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint para dispositivos menores
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Adicione mais breakpoints conforme necessário
    ],
  };

  return (
    <section id="section-sobreNos" className="body-with-grain-texture bg-cover mix-blend-multiply flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="justify-center w-[90%] h-[80%]">
        <Slider {...sliderSettings} className="grid w-full h-full border-none">
          {slidesData.map((slide, index) => (
            index !== 0 ? (
              <div key={index} id="grid" className="grid grid-rows-3">
                <div className="w-full h-full row-span-1">
                  {slide.title}
                </div>
                <div className="-mt-2 w-full h-full row-span-2">
                  {slide.content}
                </div>
              </div>
            ) : (
              <div key={index}>
                {slide.content}
              </div>
            )
            
          ))}
        </Slider>
      </div>
    </section>
  );
}
