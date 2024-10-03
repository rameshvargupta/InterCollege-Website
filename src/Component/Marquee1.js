import React, { useRef } from 'react';

const ScrollingBox = ({ title, content }) => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start();
  };

  return (
    <>
      <div className="box6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="row scrollbox">
          <h1>{title}</h1>
          <div className="col-4 Slidebox">
            <marquee ref={marqueeRef} width="85%" direction="up" height="100%" scrollamount="3">
              {content.map((item, index) => (
                <React.Fragment key={index}>
                  <p>{item}</p>
                  <hr />
                </React.Fragment>
              ))}
            </marquee>

          </div>
        </div>
      </div>


    </>
  );
};

const Marquee1 = () => {
  const announcementsContent = [
    <>
   <a href="">Annual College Fest: Registrations now open! Contact the Cultural Committee.</a> <br /> <br /> <hr />

   <a href="">NSS Camp: Join us for a week of community service and social activities</a> <br /> <br /><hr />

   <a href="">Sports Trials for Cricket and Football teams. Check the schedule outside the Sports Office.</a> <br /> <br /> <hr />

   <a href="">NSS Camp: Join us for a week of community service and social activities</a> <br /> <br /> <hr />

   <a href="">Placement Drive: Company XYZ conducting interviews next week. Register at the Placement Cell</a> <br /> <br /><hr />

   <a href="">Library Book Return Reminder: Overdue books must be returned by Friday to avoid fines.</a> <br /> <br /> <hr />

   <a href="">Student Council Elections: Nomination forms available in the Administrative Office</a> <br /> <br />
<hr />
   <a href="">Guest Lecture on Indian History by renowned historian Dr. ABC on Thursday in the Auditorium</a> <br /> <br /> 

   </>
  ];

  const marquee2Content = [
  <>
   <a href="">Internship Opportunity: ABC Company offering summer internships. Details on the notice board.</a> <br /> <br /> <hr />
   <a href="">Blood Donation Camp on Friday. Your donation can save lives. Register at the Medical Room.</a> <br /> <br /> <hr />
   <a href="">Women's Self-Defense Workshop: Learn essential self-defense techniques. Sign up at the Women's Cell.</a> <br /> <br /><hr />
   <a href="">Science Exhibition: Submit your innovative project ideas by the end of the week.</a> <br /> <br />
   <hr />
   <a href="">National Voters' Day Awareness Program: Importance of voting and voter registration drive.</a> <br /> <br /><hr />
   <a href="">Scholarship Announcement: Merit-based scholarships available for deserving students. Apply now!</a> <br /> <br /> <hr />
   <a href="">Yoga and Meditation Workshop: Reduce stress and improve well-being. Limited seats available.</a> <br /> <br />
   
  </>

  ];

  const marquee3Content = [
    <>
     <a href="">International Women's Day Celebrations: Cultural performances and panel discussions on women's empowerment.</a> <br /> <br /><hr />
     <a href="">College Magazine Committee Meeting: Interested students can attend in the English Department.</a> <br /> <br /> <hr />
     <a href="">"Physics Olympiad Training: Join the training sessions to prepare for upcoming physics competitions.</a> <br /> <br /> <hr />
     <a href="">Literary Society Meeting: Poetry reading and discussion on renowned Indian authors.</a> <br />  <br /> <hr />
     <a href="">Health and Wellness Seminar: Expert advice on maintaining a healthy lifestyle and managing stress.</a> <br /> <br /> <hr />
     <a href="">Farewell Party for Final Year Students: Celebrate the journey and bid farewell. Organizing committee meeting announced.</a> <br /> <br /> 
    </>
  ];

  return (
    <div className="d-flex justify-content-around">
      <ScrollingBox title="Announcements" content={announcementsContent} />
      <ScrollingBox title="Notice" content={marquee2Content} />
      <ScrollingBox title="Event" content={marquee3Content} />
    </div>
  );
};

export default Marquee1;
