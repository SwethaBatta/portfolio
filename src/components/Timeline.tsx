import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Technical Product Manager / Senior Software Engineer (Front-end)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <b className="workplace">BillGO</b>, Dublin, Ohio
            </h4>
            <p>
              Product Backlog Management, Scrum master, User story creation,
              JIRA, Frontend Development, Full-stack Web Development, GenAI/LLM,
              Project Management, React
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Lead Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <b className="workplace">IBM</b>, Dublin, Ohio
            </h4>
            <p>
              Full-stack Web Development, Team Leading, Product Management, MERN
              stack, Agile
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer in Test
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <b className="workplace">IBM</b>, Dublin, Ohio
            </h4>
            <p>Test Automation, Selenium, Agile</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2014"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer in Test
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <b className="workplace">Cognizant</b>, Hyderabad, India
            </h4>
            <p>Manual Testing, Quality Assurance, Team Lead, Agile</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
