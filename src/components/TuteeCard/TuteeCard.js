import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Row, Col } from "react-bootstrap";
import TuteeActivateDeactivateButton from "../TuteeActivateDeactivateButton/TuteeActivateDeactivateButton";
import MatchPageButton from "../MatchPageButton/MatchPageButton";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SubjectFlag from "../SubjectFlag/SubjectFlag";
import TuteeProfile from "../TuteeProfile/TuteeProfile";

function TuteeCard(props) {
  const subject1 = props.tutee.subject_1;
  const subject2 = props.tutee.subject_2;
  const subject3 = props.tutee.subject_3;

  const specialSubjects = useSelector((store) => store.specialSubjects);

  const languages = [
    props.tutee.tutee_language_arabic,
    props.tutee.tutee_language_chinese,
    props.tutee.tutee_language_french,
    props.tutee.tutee_language_hmong,
    props.tutee.tutee_language_somali,
    props.tutee.tutee_language_tagalog,
    props.tutee.tutee_language_tagalog,
    props.tutee.tutee_language_vietnamese,
    props.tutee.tutee_language_spanish,
  ];

  return (
    <div>
      {JSON.stringify(languages)}
      <Accordion className="mb-3" defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {/* <Row> */}
            <Col xs="3">
              {props.tutee.tutee_firstname} {props.tutee.tutee_lastname}
            </Col>
            <Col xs="2">{props.tutee.tutee_submission_timestamp}</Col>
            <Col xs="2">{props.tutee.tutee_grade}</Col>
            <Col xs="2" className="flaggedSubjectLanguage">
              {specialSubjects.map((subject) => {
                if (
                  subject1 === subject ||
                  subject2 === subject ||
                  subject3 === subject
                ) {
                  return <SubjectFlag />;
                }
              })}
              {languages.map((language) => {
                if (language === true) {
                  return <LanguageFlag />;
                }
              })}
            </Col>
            <Col className="cardButtons" xs="2">
              <TuteeActivateDeactivateButton active={props.tutee} />
              <MatchPageButton tutee={props.tutee} />
              {/* <--conditionally render the MatchButton to only show up when the tutee is activated. */}
            </Col>
            {/* </Row> */}
          </Accordion.Header>
          <Accordion.Body>
            <TuteeProfile tutee={props.tutee} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuteeCard;
