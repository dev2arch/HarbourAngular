import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./payment.component.css']
})
export class RulesComponent implements OnInit {
   data  = ''
  constructor() { }

  ngOnInit() {
    this.data =
       '<br><h2>Objective:</h2>\n' +
       '<p>\n' +
       'Building and Designing of the Robot in such a manner that it completes the allotted task,\n' +
       'accomplishing all the hurdles in the shortest period of time with most efficiency.\n' +
       '<h3>Workshop Included:</h3>\n' +
       'Robotics, Home Automation, Embedded, IOT, Arduino Robotics, Solar Panel\n' +
       '<h3>Theme:-</h3>\n' +
       '• Build and Design a Fast Grid Navigating Line Follower Robot which is Autonomous in Nature.<br>\n' +
       '• Your robot should start from the START point and should stop at the center of the HOME.<br>\n' +
       '• Robot should navigate the diversified Black line and should reach the home point.<br>\n' +
       '• Robot should complete the whole path with minimum time.<br>\n' +
       '</p>\n' +
       '<h3>Game Rules and Regulation:-</h3>\n' +
       '• Background color of the game arena will be white in color.<br>\n' +
       '• All the lines are Black in color.<br>\n' +
       '• The Dimensions of the Arena are specified before hand, under Task specification.<br>\n' +
       '• External Power Supply is not allowed.<br>\n' +
       '• Every team will get only one attempt.<br>\n' +
       '• All teams will be given preparation time before starting of the competition.<br>\n' +
       '• Four teams will compete at a time.<br>\n' +
       '• Selected teams will qualify to the next round.<br>\n' +
       '• Participants are not allowed to touch the machine or the Arena during the task.<br>\n' +
       '<h3>Eligibility Criteria:-</h3>\n' +
       '• All the Participants who have achieved 1st, 2nd, 3rd, 4th, 5th, 6th position and have merit\n' +
       'Certificate in the Zonal Rounds of TECHRADIANCE championships held all over India are eligible to\n' +
       'register for the Closed Rounds of the TECHRADIANCE Final Round.<br>\n' +
       '• All the Participants who participated in the Zonal Rounds (have participation Certificate) are eligible\n' +
       'to participate in the open rounds of the competition.<br>\n' +
       '• All the interested and keen participants can register for the open round.<br>\n' +
       'Stages of the Competition:-\n' +
       '• Prelims Round:- All the winners of the zonal round TECHRADIANCE-19 will be participating in the\n' +
       'prelims round. <br>\n' +
       '<h3>Semi Finals:-</h3>\n' +
       'All the winners of the zonal round TECHRADIANCE-19 will be participating in the\n' +
       'Semi Finals.<br>\n' +
       '<h3>Final Round :</h3>\n' +
       '– Winner team of prelims round and semi finals will be competing with each other in\n' +
       'grand finale.<br>\n' +
       'Grand finale will be the last stage of the whole competition, from which winning team will be selected\n' +
       'as the winners of the TECHRADIANCE National Level Championship-19.<br>\n' +
       '<h2>General Rules:-</h2>\n' +
       '<h3>Team Specification:-</h3>\n' +
       '• Participating team should consist of 1-6 members; team size should not increase more than 6\n' +
       'members.<br>\n' +
       '• Participating team should have their own Robotic Kit, (provided during the workshop)<br>\n' +
       '• Participants from different institutions can form a team.<br>\n' +
       '• Participants can be from different Batches, Branch, or Year.<br>\n' +
       '\n' +
       '<h3>Kit Specifications:-</h3>\n' +
       '• Maximum Power supply of 18V is allowed in the completion.<br>\n' +
       '• Kits provided and purchased from HARBOUR TECHNOLOGIES will only be allowed in the<br>\n' +
       'competition, kit manufactured or purchased from any other company will be disqualified.<br>\n' +
       'Game Arena will be shown during the event. An appropriate time will be given to configure the robot\n' +
       'according to the game arena<br>\n' +
       '<h3>Terms and condition of the competition:-</h3>\n' +
       '• During the game, team members are not allowed to touch the Robot, failure in doing so can lead to\n' +
       'Disqualification.<br>\n' +
       '• Robot should only be build according to the robot specification mentioned above; any innovation\n' +
       'and creativity within the limits will be considered.<br>\n' +
       '• Dimension marks will not be there in the final setup of the completion arena.<br>\n' +
       '• The machine must not contain any combustible, corrosive, or otherwise dangerous materials for\n' +
       'safety reasons.<br>\n' +
       '• The machines you have built will be first checked for size and safety.<br>\n' +
       '• Any kind of damage to the arena will lead to disqualification.<br>\n' +
       '• Judges have the right to disqualify any team if they feel the team is not playing with the fair interest.<br>\n' +
       '• Participants should not dismantle their robots before the completion of the whole completion as the\n' +
       'machines might be checked by the organizers at the later stage to ensure that the participants have\n' +
       'not violated any of the rules.<br>\n' +
       '• Judges hold the right to disqualify a team whose conduct is found unfair.<br>\n' +
       '• The organizers have the right to change any or all the above rules as they feel fit.<br>\n' +
       'Any changes in the rules regulation will be updated on the website.\n';
  }

  public onChange(event){
     if(event=="2"){
       this.data = '<b>Note:Teams have to carry their own tool kits,laptop and other accessories(hardware/software) needed to compete at the Finale.</b>\n' +
         '<h2>DAY 1(13TH April)-</h2>\n' +
         '<h3>Round 1(Quiz)-</h3>\n' +
         'Each zonal level winner’s team will be participating in written quiz competition for which one hour time will be given to all the teams.<br>\n' +
         'One set of question paper to each team(2-8 members) are allowed to participate in this round.<br>\n' +
         'Candidates have to submit the answer sheet strictly after the given time instructions on the question paper.<br>\n' +
         'Questions will be related to the technology they are competing for and topics discussed during the training/workshop program in the school/college.<br>\n' +
         'General knowledge and current affairs related to the technology may be asked in the question paper of this round.<br>\n' +
         '<h3>Round 2(Practical)-</h3>\n' +
         'Each team will be asked to perform the practical task in front of all audience and participants in this round.<br>\n' +
         'Practical task will be given on the spot to the teams related to the technology they are competing for.<br>\n' +
         'Specified time will be given to each team to perform their outputs as a team together in front of all participants.<br>\n' +
         'In this round the task will be given according to the practicals covered in the school/college during the workshop.<br>\n' +
         'The time management, team work and accuracy of the output will be the major scoring factors for this round.<br>\n' +
         '<b>AT THE END OF DAY 1 ASSESSMENT OF BOTH THE ROUNDS WILL BE DONE (BY TRAINERS) AND TEAMS QUALIFYING FOR FINAL ROUND WILL BE ANNOUNCED NEXT DAY.</b>\n' +
         '<h3>Day 2(14th April)-</h3>\n' +
         '<h3>Final Round-</h3>\n' +
         'Qualifying teams for this round will have to go through two stage of final round.<br>\n' +
         'Stage 1(Presentation of project made in round 2) by each team will be done individually.\n' +
         'Time duration of 30 minutes will be given to the teams to prepare for the presentation of their project to be presented by any team member or members.<br>\n' +
         'Stage 2(on spot practical task) and limited time period(45-60minutes)will be given to each team individually to show accurate and desired output.<br>\n' +
         'Accuracy,time management,discipline and team work will be the major factors responsible to score points.<br>\n' +
         '<b>SCORES AND JUDGEMENT OF STAGE 1 & STAGE 2 OF FINAL ROUND BY THE TRAINERS AND OTHER EVENT CO-ORDINATORS WILL DECIDE THE NATIONAL LEVEL JUNIOR WINNERS.</b>\n';
     }
     else if(event =="1"){
       this.data =
         '<br><h2>Objective:</h2>\n' +
         '<p>\n' +
         'Building and Designing of the Robot in such a manner that it completes the allotted task,\n' +
         'accomplishing all the hurdles in the shortest period of time with most efficiency.\n' +
         '<h3>Workshop Included:</h3>\n' +
         'Robotics, Home Automation, Embedded, IOT, Arduino Robotics, Solar Panel\n' +
         '<h3>Theme:-</h3>\n' +
         '• Build and Design a Fast Grid Navigating Line Follower Robot which is Autonomous in Nature.<br>\n' +
         '• Your robot should start from the START point and should stop at the center of the HOME.<br>\n' +
         '• Robot should navigate the diversified Black line and should reach the home point.<br>\n' +
         '• Robot should complete the whole path with minimum time.<br>\n' +
         '</p>\n' +
         '<h3>Game Rules and Regulation:-</h3>\n' +
         '• Background color of the game arena will be white in color.<br>\n' +
         '• All the lines are Black in color.<br>\n' +
         '• The Dimensions of the Arena are specified before hand, under Task specification.<br>\n' +
         '• External Power Supply is not allowed.<br>\n' +
         '• Every team will get only one attempt.<br>\n' +
         '• All teams will be given preparation time before starting of the competition.<br>\n' +
         '• Four teams will compete at a time.<br>\n' +
         '• Selected teams will qualify to the next round.<br>\n' +
         '• Participants are not allowed to touch the machine or the Arena during the task.<br>\n' +
         '<h3>Eligibility Criteria:-</h3>\n' +
         '• All the Participants who have achieved 1st, 2nd, 3rd, 4th, 5th, 6th position and have merit\n' +
         'Certificate in the Zonal Rounds of TECHRADIANCE championships held all over India are eligible to\n' +
         'register for the Closed Rounds of the TECHRADIANCE Final Round.<br>\n' +
         '• All the Participants who participated in the Zonal Rounds (have participation Certificate) are eligible\n' +
         'to participate in the open rounds of the competition.<br>\n' +
         '• All the interested and keen participants can register for the open round.<br>\n' +
         'Stages of the Competition:-\n' +
         '• Prelims Round:- All the winners of the zonal round TECHRADIANCE-19 will be participating in the\n' +
         'prelims round. <br>\n' +
         '<h3>Semi Finals:-</h3>\n' +
         'All the winners of the zonal round TECHRADIANCE-19 will be participating in the\n' +
         'Semi Finals.<br>\n' +
         '<h3>Final Round :</h3>\n' +
         '– Winner team of prelims round and semi finals will be competing with each other in\n' +
         'grand finale.<br>\n' +
         'Grand finale will be the last stage of the whole competition, from which winning team will be selected\n' +
         'as the winners of the TECHRADIANCE National Level Championship-19.<br>\n' +
         '<h2>General Rules:-</h2>\n' +
         '<h3>Team Specification:-</h3>\n' +
         '• Participating team should consist of 1-6 members; team size should not increase more than 6\n' +
         'members.<br>\n' +
         '• Participating team should have their own Robotic Kit, (provided during the workshop)<br>\n' +
         '• Participants from different institutions can form a team.<br>\n' +
         '• Participants can be from different Batches, Branch, or Year.<br>\n' +
         '\n' +
         '<h3>Kit Specifications:-</h3>\n' +
         '• Maximum Power supply of 18V is allowed in the completion.<br>\n' +
         '• Kits provided and purchased from HARBOUR TECHNOLOGIES will only be allowed in the<br>\n' +
         'competition, kit manufactured or purchased from any other company will be disqualified.<br>\n' +
         'Game Arena will be shown during the event. An appropriate time will be given to configure the robot\n' +
         'according to the game arena<br>\n' +
         '<h3>Terms and condition of the competition:-</h3>\n' +
         '• During the game, team members are not allowed to touch the Robot, failure in doing so can lead to\n' +
         'Disqualification.<br>\n' +
         '• Robot should only be build according to the robot specification mentioned above; any innovation\n' +
         'and creativity within the limits will be considered.<br>\n' +
         '• Dimension marks will not be there in the final setup of the completion arena.<br>\n' +
         '• The machine must not contain any combustible, corrosive, or otherwise dangerous materials for\n' +
         'safety reasons.<br>\n' +
         '• The machines you have built will be first checked for size and safety.<br>\n' +
         '• Any kind of damage to the arena will lead to disqualification.<br>\n' +
         '• Judges have the right to disqualify any team if they feel the team is not playing with the fair interest.<br>\n' +
         '• Participants should not dismantle their robots before the completion of the whole completion as the\n' +
         'machines might be checked by the organizers at the later stage to ensure that the participants have\n' +
         'not violated any of the rules.<br>\n' +
         '• Judges hold the right to disqualify a team whose conduct is found unfair.<br>\n' +
         '• The organizers have the right to change any or all the above rules as they feel fit.<br>\n' +
         'Any changes in the rules regulation will be updated on the website.\n';
     }
     else if(event =="3"){
          this.data = 'The Objective of this whole competition is to judge the knowledge and skills of the all the participants, on the basis of which the winners of the Championship will be declared.\n' +
            '<h2>Theme:-</h2>\n' +
            '<h3>• Quiz Competition :-</h3>\n' +
            'All teams will have to participate in the first round of the competition which will be a Quiz format, all the teams will have to complete a questionnaire which will be testing the knowledge and skills of the teams on particular topic on which they did the workshop.<br>\n' +
            'The winners of this stage will be selected on the basis of highest correct answers given by a team.\n' +
            '<h3>• Task Competition:-</h3>\n' +
            'Top 10 teams will be selected from the Quiz competition; will qualify to the next Round which is ‘Task Completion”.<br>\n' +
            'Teams will be allotted a Task to complete.<br>\n' +
            'The team who will be able to complete the task the in minimum time and most efficiency will be will be the Winner of the Competition.<br>\n' +
            '<h3>Game Rules and Regulation:-</h3>\n' +
            '• The Final Round Problem statement will be announced by the Techradiance Team on the day of the Competition.<br>\n' +
            '• Participating teams will be asked to complete a task in a specified period of time.<br>\n' +
            '• Participating teams need to present the anatomy of their task with a small presentation round.<br>\n' +
            ' \n' +
            '<h3>General Rules:-</h3>\n' +
            '<b>Team Specification:-</b>\n' +
            '• Participating team should consist of 1-2 members; team size should not increase more than 2 members.<br>\n' +
            '• Participants from different institutions can form a team.<br>\n' +
            '• Participants can be from different Class, Batches, Branch, or Year.\n' +
            'Task Specifications:-<br>\n' +
            '• The Task for the competition will be announced at the time of competition, specified time period will be provided to prepare for the task.<br>\n' +
            'Any changes in the rules regulation will be updated on the website.<br>\n'
     }
     else if(event=="4"){
       this.data= 'The Objective of this whole competition is to judge the knowledge and skills of the all the participants, on the basis of which the winners of the Championship will be declared.\n' +
         '<h2>Theme:-</h2>\n' +
         '<h3>• Quiz Competition :-</h3>\n' +
         'All teams will have to participate in the first round of the competition which will be a Quiz format, all the teams will have to complete a questionnaire which will be testing the knowledge and skills of the teams on particular topic on which they did the workshop.<br>The winners of this stage will be selected on the basis of highest correct answers given by a team.<br>\n' +
         '<h3>• Task Competition:-</h3>\n' +
         'Top 10 teams will be selected from the Quiz competition; will qualify to the next Round which is ‘Task Completion”.<br>\n' +
         'Teams will be allotted a Task to complete.<br>\n' +
         'The team who will be able to complete the task the in minimum time and most efficiency will be will be the Winner of the Competition.<br>\n' +
         '<h3>Game Rules and Regulation:-</h3>\n' +
         '• The Final Round Problem statement will be announced by the Techradiance Team on the day of the Competition.<br>\n' +
         '• Participating teams will be asked to complete a task in a specified period of time.<br>\n' +
         '• Participating teams need to present the anatomy of their task with a small presentation round.<br>\n' +
         '<h3>General Rules:-</h3>\n' +
         'Team Specification:-<br>\n' +
         '• Participating team should consist of 1-2 members; team size should not increase more than 2 members.<br>\n' +
         '• Participants from different institutions can form a team.<br>\n' +
         '• Participants can be from different Class, Batches, Branch, or Year.\n' +
         'Task Specifications:-<br>\n' +
         '• The Task for the competiton will be announced at the time of competition, specified time period will be provided to preprare for the task.<br>\n' +
         'Any changes in the rules regulation will be updated on the website.<br>'
     }

  }

}
