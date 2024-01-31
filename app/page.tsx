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

function titleQuemSomos(){
  return(
    <div className="marrom">
      <h1 className={`${title()} tracking-wide font-serif row-span-1 justify-self-start sm:text-6xl md:text-5xl lg:text-8xl`}>Quem somos</h1>
    </div>    
  );
}

function cardSobreNos(){
  return(
    <Card 
    
      className="
      levitating m-0 rounded-lg 
      border-8 border-pessego border-double
      shadow-lg shadow-marrom" >
        
        <CardHeader className="center">

          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-xl !text-center">
                  Sobre nós
              </h2> 
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
          </Code>
          
        </CardHeader>
        <CardBody className=" grid grid-rows-3 grid-cols-1 gap-3 ">
          <h2 className="icon_label center ml-2">
            <InfoIcon sx={{  fontSize: '25px' }}></InfoIcon>
            Aulas | Eventos | Espetáculos
          </h2>
          <h2 className="icon_label center">
            <ApartmentIcon sx={{  fontSize: '25px' }}></ApartmentIcon>
            Empresa de pequeno porte
          </h2>
          <h2 className="icon_label center ">
            <GroupsIcon sx={{ fontSize: '25px' }}></GroupsIcon>
            25 integrantes (elenco fixo)
          </h2>
        </CardBody>
      </Card>
  );
}

function cardDirecao(){
  return(
    <Card 
        className="
        levitating
        ml-0 rounded-lg 
        border-8 border-pessego border-double 
        shadow-lg shadow-marromVermelho">
        <CardHeader className="center">
          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-xl text-center">
                Direção
              </h2>
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
          </Code>
        </CardHeader>

        <CardBody className=" grid grid-rows-4 grid-cols-1 items-center ">

          <div className="center">
            <Avatar radius="full" size="md" src="/imgs/fotoPessoa.png" />
            <div className="flex flex-col items-start justify-center ">
              <h4 className="text-md font-bold leading-none text-marrom ml-2">Juliana Mascarenhas</h4>
            </div>
          </div>

          <h2 className="icon_label">
            <InfoIcon sx={{ fontSize: '25px', color: "#601802" }}></InfoIcon>
            Uma das fundadoras iniciais
          </h2>
          <h2 className="icon_label ">
            <StarIcon sx={{ fontSize: '25px', color: "#601802" }}></StarIcon>
            Dançarina e coreógrafa
          </h2>
          <div>
            <h2 className="icon_label">
              <SchoolIcon sx={{ fontSize: '25px', color: "#601802" }}></SchoolIcon>
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
  );
}

function cardHistoria(){
  return(
    <Card className=" bg-pessego levitating w-full h-full">

    </Card>
  );
}

function cardMissao(){
  return(
    <Card className="bg-pessego levitating w-full h-full">

    </Card>
  );
}

function cardValores(){
  return(
    <Card isBlurred className="
    levitating m-0 rounded-lg 
    border-8 border-pessego border-double
    ">

      <CardHeader className='center'>
        <h1 className='text-marrom font-bold font-mono text-xl'>Valores</h1>
      </CardHeader>
      <Divider></Divider>
      <CardBody>
        <h1 className='text-marrom font-bold font-mono text-xl'>Diversidade</h1>
      </CardBody>
    {/*Diversidade, ética, transparência , compromentomimento, responsabilidade, cooperação, respeito, profissionalismo*/}
    </Card>
  );
}

function cardVisao(){
  return(
    <Card className="bg-pessego levitating h-full w-full">
        <h1>Visao</h1>
    </Card>
  );
}

function quemSomos() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-auto w-auto">

      <div className="row-span-2">
        <div className="grid grid-rows-3 gap-4" style={{ gridTemplateRows: '1fr 2fr 2fr' }}>

          <div className="h-full">  
              {titleQuemSomos()}
          </div>
          <div className="w-[95%]">
            {cardSobreNos()}
          </div>
          <div className=" w-[95%] h-[95%]">
            {cardHistoria()}
          </div>

        </div>
      </div>
      

      <div className="mt-4 justify-center gap-2 grid grid-rows-2 grid-cols-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
      
        <div className="center mb-6">
          {cardDirecao()}
        </div>
        
        <div className="center ">
          {cardValores()}
        </div>
        
        <div className="center w-[80%] h-[90%]">
          {cardMissao()}
        </div>
       
        <div className="center h-[80%]">
          {cardVisao()}
        </div>
      
      </div>
    </div>

  );
}

function Principal(){
  return(
    <div className="grid grid-rows-3 grid-cols-3">

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
        <h1 className={`${title()} tracking-widest font-serif row-span-1 sm:text-6xl md:text-5xl lg:text-8xl`}>A CIA</h1>
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
        
          <div key={1}>
            {Principal()}
          </div>
          <div key={2}>
            {quemSomos()}
          </div>
           
        </Slider>
      </div>
    </section>
  );
}
