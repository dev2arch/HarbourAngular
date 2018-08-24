import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  workshopData;
  filter;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.filter = this.route.snapshot.params['cat']
    this.route.params.subscribe(
      (param: Params) => {this.filter = param['cat']; }
    )
    this.workshopData = [
      {
        name: 'Ethical Hacking',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/ethical-hacking-workshop-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Python',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/pythonlogo-300x200.jpg',
        cat: 'cs'
      },
      {
        name: 'Cloud Computing',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/cloudcomputing.jpg',
        cat: 'cs'
      },
      {
        name: 'Android Apps Development',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/ANDROID_360DEGREE_SERVICES-300x200.png',
        cat: 'cs'
      },
      {
        name: 'Android Game Development',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/androidgame.jpg',
        cat: 'cs'
      },
      {
        name: 'Ethical Hacking Kali Linux',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/ethicalhacking.jpg  ',
        cat: 'cs'
      },
      {
        name: 'Linux',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/linux.jpg',
        cat: 'cs'
      },
      {
        name: 'Big Data & Hadoop',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/bigdata.jpg',
        cat: 'cs'
      },
      {
        name: 'R- Programming',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/rprogramming.jpg',
        cat: 'cs'
      },
      {
        name: 'Open Source CV',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/opensource.jpg',
        cat: 'cs'
      },
      {
        name: 'CCNA Networking',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/ccna.jpg',
        cat: 'cs'
      },
      {
        name: 'Machine Learning',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/ml.jpg',
        cat: 'cs'
      },
      {
        name: 'Cloud with Amazon Web Services',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/aws.jpg',
        cat: 'cs'
      },
      {
        name: '3d Gaming & Augment Reality or Virtual Reality',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/gaming.jpg',
        cat: 'cs'
      },
      {
        name: 'Artificial Intelligency',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/ai.jpg',
        cat: 'cs'
      },
      {
        name: 'Matlab',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/matlab.jpg',
        cat: 'ece'
      },
      {
        name: 'Ardunio',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/ardunio.jpg',
        cat: 'ece'
      },
      {
        name: 'Rasberry Pi',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/rasbarry.jpg',
        cat: 'ece'
      },
      {
        name: 'Home Automation',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/automation.jpg',
        cat: 'ece'
      },
      {
        name: 'PCB Designing',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/pcb.jpg',
        cat: 'ece'
      },
      {
        name: 'Lenso Radar Systems',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/lenso.jpg',
        cat: 'ece'
      },
      {
        name: 'IOT with Arduino',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/iot.jpg',
        cat: 'ece'
      },
      {
        name: 'Quadcopter',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/quadcopter.jpg',
        cat: 'ece'
      },
      {
        name: 'IOT with Arduino',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/iot.jpg',
        cat: 'ece'
      },
      {
        name: 'IOT with ESP8266',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/iotesp.jpg',
        cat: 'ece'
      },
      {
        name: 'Solar & Smart Energy System',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/solar.jpg',
        cat: 'ece'
      },
      {
        name: 'Artificial Intellingency',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/ai.jpg',
        cat: 'ece'
      },
      {
        name: 'Automobile IC Engine Design',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/automobile.jpg',
        cat: 'me'
      },
      {
        name: 'Software Training: Catia, Pto-e, Autocad',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/softwaretraining.jpg',
        cat: 'me'
      },
      {
        name: 'Go Kart Design& Analysis',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/gokart.jpg',
        cat: 'me'
      },
      {
        name: 'Solid Work',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/solidworks.jpg',
        cat: 'me'
      },
      {
        name: 'F1 Racing Car Design',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/racingcar.jpg',
        cat: 'me'
      },
      {
        name: 'Piping Design',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/piping.jpg',
        cat: 'me'
      },
      {
        name: 'Ansys',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/ansys.jpg',
        cat: 'me'
      },
      {
        name: 'Hydraulic Arm',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/hydraulic.jpg',
        cat: 'me'
      },
      {
        name: 'Quad Copter',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/quadcopter.jpg',
        cat: 'me'
      },
      {
        name: 'Industrial Hydraulics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/ihydraulics.jpg',
        cat: 'me'
      },
      {
        name: 'Vehicle Dynamics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/vegicle.jpg',
        cat: 'me'
      },
      {
        name: 'F1 & Moto GP',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/motogp.jpg',
        cat: 'me'
      },
      {
        name: 'Automotive Air Conditioning',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/auto.jpg',
        cat: 'me'
      },
      {
        name: 'E-Kart Design & Analysis',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/ekart.jpg',
        cat: 'me'
      },
      {
        name: 'Electrohydraulics in Automotive',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/electro.jpg',
        cat: 'me'
      },
      {
        name: 'Mercedes Engine Overhauling',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/merc.jpg',
        cat: 'me'
      },
      {
        name: 'Bridge Design',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/bridge.jpg',
        cat: 'civil'
      },
      {
        name: 'Staad-Pro',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/stad.jpg',
        cat: 'civil'
      },
      {
        name: 'Autocad',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/autocad.jpg',
        cat: 'civil'
      },
      {
        name: 'Tall Building Design',
        pdf: '#',
        fee: '900',
        img: '../../assets/images/tall.jpg',
        cat: 'civil'
      },
      {
        name: ' 3ds Max',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/3d.jpg',
        cat: 'civil'
      },
      {
        name: 'Highway Designing',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/highway.jpg',
        cat: 'civil'
      },
      {
        name: 'Structural Design',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/structure.jpg',
        cat: 'civil'
      },
      {
        name: 'Foundation Analysis',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/foundation.jpg',
        cat: 'civil'
      },
      {
        name: 'Remote Sensing',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/remote.jpg',
        cat: 'civil'
      },
      {
        name: 'Skyscraper Design',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/skyscrapper.jpg',
        cat: 'civil'
      },
      {
        name: 'Total Station with Surveying',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/total.jpg',
        cat: 'civil'
      },
      {
        name: 'Auto- Robotics',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/autorobotics.jpg',
        cat: 'robotics'
      },
      {
        name: 'Mobile Controlled Robotics',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/mobilecontrolled.jpg',
        cat: 'robotics'
      },
      {
        name: ' Bluetooth Robotics',
        pdf: '#',
        fee: '999',
        img: '../../assets/images/bluetoothrobotics.jpg',
        cat: 'robotics'
      },
      {
        name: 'Maze Solving Intelligent',
        pdf: '#',
        fee: '1000',
        img: '../../assets/images/mazesolving.jpg',
        cat: 'robotics'
      },
      {
        name: 'Industrial Robotics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/industrialrobo.jpg',
        cat: 'robotics'
      },
      {
        name: 'Android Controlled Robotics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/androidcontrolled.jpg',
        cat: 'robotics'
      },
      {
        name: 'Hand Gesture Robotics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/handgesture.jpg',
        cat: 'robotics'
      },
      {
        name: 'Gyro Robotics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/gyro.jpg',
        cat: 'robotics'
      }, {
        name: 'Wireless Technology Based Robot',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/wirelessrobo.jpg',
        cat: 'robotics'
      }, {
        name: 'WiFi Controlled Robotics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/wifirobo.jpg',
        cat: 'robotics'
      }, {
        name: 'Environmental Robotics',
        pdf: '#',
        fee: '1200',
        img: '../../assets/images/environmental.jpg',
        cat: 'robotics'
      },
      {
        name: 'Self Balancing Robot',
        pdf: '#',
        fee: '1400',
        img: '../../assets/images/selfbalancing.jpg',
        cat: 'robotics'
      },
      {
        name: 'Sixth Sense Robotics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/sixthsense.jpg',
        cat: 'robotics'
      },
      {
        name: 'X-bee Robotics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/xbee.jpg',
        cat: 'robotics'
      },
      {
        name: 'Brain Controlled Robotics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/brain.jpg',
        cat: 'robotics'
      },
      {
        name: 'Satellite Robotics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/satellite.jpg',
        cat: 'robotics'
      },
      {
        name: 'Haptic Arm Robotics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/haptic.jpg',
        cat: 'robotics'
      },
      {
        name: 'Robotic ARM',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/roboticarm.jpg',
        cat: 'robotics'
      },
      {
        name: 'Vision Robotics with Raspberry Pi',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/vision.jpg',
        cat: 'robotics'
      },
      {
        name: 'Robotics on STM32- ARM Processor',
        pdf: '#',
        fee: '1400',
        img: '../../assets/images/armprocessor.jpg',
        cat: 'robotics'
      },
      {
        name: 'Swarm Robotics(2 Robots will be formed)',
        pdf: '#',
        fee: '1400',
        img: '../../assets/images/swarm.jpg',
        cat: 'robotics'
      },
      {
        name: 'Gesture Controlled Robotics',
        pdf: '#',
        fee: '1500',
        img: '../../assets/images/sesture.jpg',
        cat: 'robotics'
      },
    ];


  }
}
