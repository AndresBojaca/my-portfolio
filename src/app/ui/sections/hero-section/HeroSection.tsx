import React from "react";
import './HeroSection.css'

import image from '../../../../../public/pp.webp'


const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex align-middle justify-center">
      <div className="grid grid-cols-1 z-10">
        <div className="place-self-center text-center w-full relative">
          <div className="hero-elements">
            <div>
              <span className="relative inline-flex overflow-hidden rounded-full p-[3px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,_#00aaff7a_0%,_#006dff85_30%,_#51d0e4_74%)]"></span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-sky-400 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">Full Stack Developer</div>
              </span>
            </div>
            <h1 className="font-bold pb-1 text-3xl md:text-5xl lg:text-6xl lg:leading-[1.3] [text-shadow:_0px_0px_25px_ black]">Hola, Soy Andrés Bojacá.
            </h1>
            <p className=" text-gray-400 text-[14px] sm:text-md lg:text-base mb-4 sm:text-sm max-w-4xl">Apasionado por la tecnología y la innovación, he creado este portafolio para mostrarte mis proyectos destacados, donde transformo ideas en soluciones concretas. Con más de <span className="text-white">6 años de experiencia en desarrollo</span>, me encanta aprender sobre temas de innovación. ¡Bienvenido a mi portafolio!
            </p>
            <button className=" rounded-lg border border-white py-4 px-6 hover:bg-white hover:text-black  hover:shadow-[0_0_70px_5px_] hover:shadow-white/50 hover:scale-105 backdrop-blur-lg transition-all">Saber más</button>
          </div>
          <div className="profile-picture">
            <img src="/pp.webp" className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_55px_80px_rgba(0,0,0,1)]" alt="" width="600px" height="auto" />
          </div>
        </div>
      </div>
      <div className="grid-background z-0">

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cuadricula" patternUnits="userSpaceOnUse" x="5" y="5" width="30" height="30">
              <g id="grupoDeLineas" stroke="rgba(255,255,255,0.1)">
                <line x1="0" y1="0" x2="0" y2="30" />
                <line x1="0" y1="30" x2="30" y2="30" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cuadricula)" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid" viewBox="0 0 100% 100%">
          <defs>
            <pattern id="pid-0.8552201407802895" x="0" y="0" width="100%" height="1095.6799999999998" patternUnits="userSpaceOnUse">
              <g transform="scale(12.5)"><defs>
                <filter id="pat-0.7069475539447514" width="300%" height="300%" color-interpolation-filters="sRGB">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8"></feGaussianBlur>
                </filter>
              </defs><g filter="url(#pat-0.7069475539447514)"><g>
                <circle cx="-35.14951481822834" cy="21.950729109544056" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="220.85048518177166" cy="21.950729109544056" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="476.85048518177166" cy="21.950729109544056" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="-35.14951481822834" cy="277.95072910954406" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="220.85048518177166" cy="277.95072910954406" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="476.85048518177166" cy="277.95072910954406" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="-35.14951481822834" cy="533.950729109544" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="220.85048518177166" cy="533.950729109544" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="476.85048518177166" cy="533.950729109544" r="27.277605662270023" fill="#3c45c1"></circle> <circle cx="-156.35364283626723" cy="139.1681466815209" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="99.64635716373277" cy="139.1681466815209" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="355.6463571637328" cy="139.1681466815209" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="-156.35364283626723" cy="395.1681466815209" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="99.64635716373277" cy="395.1681466815209" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="355.6463571637328" cy="395.1681466815209" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="-156.35364283626723" cy="651.168146681521" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="99.64635716373277" cy="651.168146681521" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="355.6463571637328" cy="651.168146681521" r="28.004636890422294" fill="#3c45c1"></circle> <circle cx="-233.21977623155334" cy="80.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="22.78022376844666" cy="80.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="278.78022376844666" cy="80.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="-233.21977623155334" cy="336.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="22.78022376844666" cy="336.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="278.78022376844666" cy="336.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="-233.21977623155334" cy="592.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="22.78022376844666" cy="592.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="278.78022376844666" cy="592.0415222988222" r="17.430408566171273" fill="#3c45c1"></circle> <circle cx="-153.19285718466386" cy="51.134266008566044" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="102.80714281533614" cy="51.134266008566044" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="358.80714281533614" cy="51.134266008566044" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="-153.19285718466386" cy="307.13426600856604" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="102.80714281533614" cy="307.13426600856604" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="358.80714281533614" cy="307.13426600856604" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="-153.19285718466386" cy="563.1342660085661" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="102.80714281533614" cy="563.1342660085661" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="358.80714281533614" cy="563.1342660085661" r="17.56668417018377" fill="#3c45c1"></circle> <circle cx="-218.52051129560613" cy="63.05883507253111" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="37.47948870439387" cy="63.05883507253111" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="293.4794887043939" cy="63.05883507253111" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="-218.52051129560613" cy="319.0588350725311" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="37.47948870439387" cy="319.0588350725311" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="293.4794887043939" cy="319.0588350725311" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="-218.52051129560613" cy="575.0588350725311" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="37.47948870439387" cy="575.0588350725311" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="293.4794887043939" cy="575.0588350725311" r="11.415985367429208" fill="#3c45c1"></circle> <circle cx="-166.16096299760312" cy="43.27574381037567" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="89.83903700239688" cy="43.27574381037567" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="345.8390370023969" cy="43.27574381037567" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="-166.16096299760312" cy="299.2757438103757" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="89.83903700239688" cy="299.2757438103757" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="345.8390370023969" cy="299.2757438103757" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="-166.16096299760312" cy="555.2757438103756" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="89.83903700239688" cy="555.2757438103756" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="345.8390370023969" cy="555.2757438103756" r="25.542641109929477" fill="#3c45c1"></circle> <circle cx="-243.4583549042071" cy="214.00846279966464" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="12.541645095792887" cy="214.00846279966464" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="268.5416450957929" cy="214.00846279966464" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="-243.4583549042071" cy="470.00846279966464" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="12.541645095792887" cy="470.00846279966464" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="268.5416450957929" cy="470.00846279966464" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="-243.4583549042071" cy="726.0084627996646" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="12.541645095792887" cy="726.0084627996646" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="268.5416450957929" cy="726.0084627996646" r="18.80910354706592" fill="#3c45c1"></circle> <circle cx="-203.291593383799" cy="218.71390217567387" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="52.70840661620099" cy="218.71390217567387" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="308.708406616201" cy="218.71390217567387" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="-203.291593383799" cy="474.71390217567387" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="52.70840661620099" cy="474.71390217567387" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="308.708406616201" cy="474.71390217567387" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="-203.291593383799" cy="730.7139021756739" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="52.70840661620099" cy="730.7139021756739" r="11.656379494867991" fill="#3c45c1"></circle> <circle cx="308.708406616201" cy="730.7139021756739" r="11.656379494867991" fill="#3c45c1"></circle>
                <animateTransform attributeName="transform" type="translate" dur="20s" repeatCount="indefinite" keyTimes="0;1" values="0 0;0 -256"></animateTransform>
              </g><g>
                    <circle cx="-61.15331894391761" cy="47.31140730143517" r="9.550184972415058" fill="#005799"></circle> <circle cx="194.8466810560824" cy="47.31140730143517" r="9.550184972415058" fill="#005799"></circle> <circle cx="450.8466810560824" cy="47.31140730143517" r="9.550184972415058" fill="#005799"></circle> <circle cx="-61.15331894391761" cy="303.31140730143517" r="9.550184972415058" fill="#005799"></circle> <circle cx="194.8466810560824" cy="303.31140730143517" r="9.550184972415058" fill="#005799"></circle> <circle cx="450.8466810560824" cy="303.31140730143517" r="9.550184972415058" fill="#005799"></circle> <circle cx="-61.15331894391761" cy="559.3114073014351" r="9.550184972415058" fill="#005799"></circle> <circle cx="194.8466810560824" cy="559.3114073014351" r="9.550184972415058" fill="#005799"></circle> <circle cx="450.8466810560824" cy="559.3114073014351" r="9.550184972415058" fill="#005799"></circle> <circle cx="-98.9118057924976" cy="-1.3241110870402508" r="17.336523532014773" fill="#005799"></circle> <circle cx="157.0881942075024" cy="-1.3241110870402508" r="17.336523532014773" fill="#005799"></circle> <circle cx="413.0881942075024" cy="-1.3241110870402508" r="17.336523532014773" fill="#005799"></circle> <circle cx="-98.9118057924976" cy="254.67588891295975" r="17.336523532014773" fill="#005799"></circle> <circle cx="157.0881942075024" cy="254.67588891295975" r="17.336523532014773" fill="#005799"></circle> <circle cx="413.0881942075024" cy="254.67588891295975" r="17.336523532014773" fill="#005799"></circle> <circle cx="-98.9118057924976" cy="510.67588891295975" r="17.336523532014773" fill="#005799"></circle> <circle cx="157.0881942075024" cy="510.67588891295975" r="17.336523532014773" fill="#005799"></circle> <circle cx="413.0881942075024" cy="510.67588891295975" r="17.336523532014773" fill="#005799"></circle> <circle cx="-98.9118057924976" cy="766.6758889129597" r="17.336523532014773" fill="#005799"></circle> <circle cx="157.0881942075024" cy="766.6758889129597" r="17.336523532014773" fill="#005799"></circle> <circle cx="413.0881942075024" cy="766.6758889129597" r="17.336523532014773" fill="#005799"></circle> <circle cx="-182.69023293099883" cy="69.60325325448707" r="18.72156838856015" fill="#005799"></circle> <circle cx="73.30976706900117" cy="69.60325325448707" r="18.72156838856015" fill="#005799"></circle> <circle cx="329.30976706900117" cy="69.60325325448707" r="18.72156838856015" fill="#005799"></circle> <circle cx="-182.69023293099883" cy="325.6032532544871" r="18.72156838856015" fill="#005799"></circle> <circle cx="73.30976706900117" cy="325.6032532544871" r="18.72156838856015" fill="#005799"></circle> <circle cx="329.30976706900117" cy="325.6032532544871" r="18.72156838856015" fill="#005799"></circle> <circle cx="-182.69023293099883" cy="581.6032532544871" r="18.72156838856015" fill="#005799"></circle> <circle cx="73.30976706900117" cy="581.6032532544871" r="18.72156838856015" fill="#005799"></circle> <circle cx="329.30976706900117" cy="581.6032532544871" r="18.72156838856015" fill="#005799"></circle> <circle cx="-77.20535507961216" cy="35.80602983395454" r="29.359178834953372" fill="#005799"></circle> <circle cx="178.79464492038784" cy="35.80602983395454" r="29.359178834953372" fill="#005799"></circle> <circle cx="434.79464492038784" cy="35.80602983395454" r="29.359178834953372" fill="#005799"></circle> <circle cx="-77.20535507961216" cy="291.80602983395454" r="29.359178834953372" fill="#005799"></circle> <circle cx="178.79464492038784" cy="291.80602983395454" r="29.359178834953372" fill="#005799"></circle> <circle cx="434.79464492038784" cy="291.80602983395454" r="29.359178834953372" fill="#005799"></circle> <circle cx="-77.20535507961216" cy="547.8060298339545" r="29.359178834953372" fill="#005799"></circle> <circle cx="178.79464492038784" cy="547.8060298339545" r="29.359178834953372" fill="#005799"></circle> <circle cx="434.79464492038784" cy="547.8060298339545" r="29.359178834953372" fill="#005799"></circle> <circle cx="-222.764153334629" cy="181.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="33.235846665371014" cy="181.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="289.235846665371" cy="181.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="-222.764153334629" cy="437.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="33.235846665371014" cy="437.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="289.235846665371" cy="437.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="-222.764153334629" cy="693.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="33.235846665371014" cy="693.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="289.235846665371" cy="693.4512542811362" r="15.3792630206292" fill="#005799"></circle> <circle cx="-205.5206659731587" cy="99.24754634189395" r="24.049723546393423" fill="#005799"></circle> <circle cx="50.479334026841286" cy="99.24754634189395" r="24.049723546393423" fill="#005799"></circle> <circle cx="306.4793340268413" cy="99.24754634189395" r="24.049723546393423" fill="#005799"></circle> <circle cx="-205.5206659731587" cy="355.24754634189395" r="24.049723546393423" fill="#005799"></circle> <circle cx="50.479334026841286" cy="355.24754634189395" r="24.049723546393423" fill="#005799"></circle> <circle cx="306.4793340268413" cy="355.24754634189395" r="24.049723546393423" fill="#005799"></circle> <circle cx="-205.5206659731587" cy="611.2475463418939" r="24.049723546393423" fill="#005799"></circle> <circle cx="50.479334026841286" cy="611.2475463418939" r="24.049723546393423" fill="#005799"></circle> <circle cx="306.4793340268413" cy="611.2475463418939" r="24.049723546393423" fill="#005799"></circle> <circle cx="-253.28812608304662" cy="72.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="2.7118739169533796" cy="72.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="258.7118739169534" cy="72.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="-253.28812608304662" cy="328.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="2.7118739169533796" cy="328.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="258.7118739169534" cy="328.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="-253.28812608304662" cy="584.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="2.7118739169533796" cy="584.4143125211283" r="11.60050267552764" fill="#005799"></circle> <circle cx="258.7118739169534" cy="584.4143125211283" r="11.60050267552764" fill="#005799"></circle>
                    <animateTransform attributeName="transform" type="translate" dur="15s" repeatCount="indefinite" keyTimes="0;1" values="0 0;0 -256"></animateTransform>
                  </g><g>
                    <circle cx="-164.1570008774067" cy="139.42806256427787" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="91.84299912259331" cy="139.42806256427787" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="347.8429991225933" cy="139.42806256427787" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="-164.1570008774067" cy="395.42806256427787" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="91.84299912259331" cy="395.42806256427787" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="347.8429991225933" cy="395.42806256427787" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="-164.1570008774067" cy="651.4280625642779" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="91.84299912259331" cy="651.4280625642779" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="347.8429991225933" cy="651.4280625642779" r="13.25798395982634" fill="#1b98ff"></circle> <circle cx="-33.69200773929043" cy="149.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="222.30799226070957" cy="149.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="478.30799226070957" cy="149.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="-33.69200773929043" cy="405.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="222.30799226070957" cy="405.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="478.30799226070957" cy="405.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="-33.69200773929043" cy="661.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="222.30799226070957" cy="661.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="478.30799226070957" cy="661.108799204857" r="27.29538312962475" fill="#1b98ff"></circle> <circle cx="-154.28462664530343" cy="-24.59973235736078" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="101.71537335469657" cy="-24.59973235736078" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="357.71537335469657" cy="-24.59973235736078" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="-154.28462664530343" cy="231.40026764263922" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="101.71537335469657" cy="231.40026764263922" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="357.71537335469657" cy="231.40026764263922" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="-154.28462664530343" cy="487.4002676426392" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="101.71537335469657" cy="487.4002676426392" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="357.71537335469657" cy="487.4002676426392" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="-154.28462664530343" cy="743.4002676426392" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="101.71537335469657" cy="743.4002676426392" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="357.71537335469657" cy="743.4002676426392" r="29.4393250566781" fill="#1b98ff"></circle> <circle cx="-162.3784930352159" cy="53.60597564219677" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="93.62150696478409" cy="53.60597564219677" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="349.6215069647841" cy="53.60597564219677" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="-162.3784930352159" cy="309.60597564219677" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="93.62150696478409" cy="309.60597564219677" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="349.6215069647841" cy="309.60597564219677" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="-162.3784930352159" cy="565.6059756421968" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="93.62150696478409" cy="565.6059756421968" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="349.6215069647841" cy="565.6059756421968" r="29.189327703796234" fill="#1b98ff"></circle> <circle cx="-148.83244203936658" cy="41.499148130735364" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="107.16755796063342" cy="41.499148130735364" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="363.1675579606334" cy="41.499148130735364" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="-148.83244203936658" cy="297.49914813073536" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="107.16755796063342" cy="297.49914813073536" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="363.1675579606334" cy="297.49914813073536" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="-148.83244203936658" cy="553.4991481307354" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="107.16755796063342" cy="553.4991481307354" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="363.1675579606334" cy="553.4991481307354" r="27.614976670546763" fill="#1b98ff"></circle> <circle cx="-77.2169445146028" cy="57.48402780410339" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="178.7830554853972" cy="57.48402780410339" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="434.7830554853972" cy="57.48402780410339" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="-77.2169445146028" cy="313.4840278041034" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="178.7830554853972" cy="313.4840278041034" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="434.7830554853972" cy="313.4840278041034" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="-77.2169445146028" cy="569.4840278041033" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="178.7830554853972" cy="569.4840278041033" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="434.7830554853972" cy="569.4840278041033" r="21.087800530941323" fill="#1b98ff"></circle> <circle cx="-37.48383381588525" cy="-17.6316797751453" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="218.51616618411475" cy="-17.6316797751453" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="474.51616618411475" cy="-17.6316797751453" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="-37.48383381588525" cy="238.3683202248547" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="218.51616618411475" cy="238.3683202248547" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="474.51616618411475" cy="238.3683202248547" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="-37.48383381588525" cy="494.3683202248547" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="218.51616618411475" cy="494.3683202248547" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="474.51616618411475" cy="494.3683202248547" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="-37.48383381588525" cy="750.3683202248546" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="218.51616618411475" cy="750.3683202248546" r="25.807424919957935" fill="#1b98ff"></circle> <circle cx="474.51616618411475" cy="750.3683202248546" r="25.807424919957935" fill="#1b98ff"></circle>
                    <animateTransform attributeName="transform" type="translate" dur="13.3333333333333335s" repeatCount="indefinite" keyTimes="0;1" values="0 0;0 -256"></animateTransform>
                  </g></g></g>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pid-0.8552201407802895)"></rect>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection;