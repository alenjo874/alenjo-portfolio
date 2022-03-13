import React from "react";
import ResumeCard from "./ResumeCard";
import { v4 as uuidv4 } from "uuid";

function Resume({ scrollShowAnimation }) {
  const experienceArray = [
    {
      company: "IMPERIAL DADE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvqXLkU2N4xNGit038L5r1lsv58rf5ekmcQ&usqp=CAU",
      link: "https://imperialdade.com/",
      position: "Senior Contracts Specialist",
      details: [
        "Managed a team that included resolving performance issues, ensured that all projects are completed in time, and provided team guidance",
        "Ensure contract renewals, extensions, and amendments are uploaded into internal analytics cloud software",
        "Oversaw the onboarding process for new team members with an established vision and plan",
        "Responsible for curating accurate monthly reports to send out to vendors for rebates of over $10 million dollars",
        "Coordinated with over 30 vendors serving as the point of contact for all contractual communications and commitments",
      ],
      location: "Jersey City, NJ",
      dates: "Aug. 2021-Jan. 2022",
    },
    {
      company: "IMPERIAL DADE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvqXLkU2N4xNGit038L5r1lsv58rf5ekmcQ&usqp=CAU",
      link: "https://imperialdade.com/",
      position: "Contracts and Pricing Specialist",
      details: [
        "Evaluated ideal contract pricing to maximize company profit margins and coordinated with sales team to provide sell price for buyers",
        "Analyzed internal data with Excel formulas to ensure contracts comply with company goals and standards",
        "Consolidated thousands of contracts from different systems due to over 40 company acquisitions",
        "Conducted pricing support review that captured an average of $5000 monthly missing rebates",
        "Utilized Excel to convert contract pricing data into reports and upload into analytics cloud software",
      ],
      location: "Jersey City, NJ",
      dates: "Jan. 2019-Aug. 2021",
    },
    {
      company: "DREW & ROGERS",
      logo: "data:image/jpeg;base64,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",
      link: "https://www.drewandrogers.com/",
      position: "Business Analyst Internship",
      details: [
        "Coordinated, created, and provided reports to management while manipulating data using pivot tables and functions",
        "Developed frameworks to address data, analytics, and strategy development needs",
        "Analyzed and imputed all aspects of account/assets information to ensure conformance with company policies, a high level of customer satisfaction, and responsiveness",
      ],
      location: "Fairfield, NJ",
      dates: "May 2018-Dec. 2018",
    },
    {
      company: "EASYKNOCK",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAxlBMVEX///9BQUE/Pz9DQ0P7+/s7OzvOzs7CwsItLS3W1tbv7+80NDT5+fmpqallZWVPT0/n5+fe3t5JSUnDw8MyMjK2traFhYVYWFitra2ioqL5//+0tLScnJzl5eWUlJR4eHhwcHCDg4NgYGA9vpby//8apn2NjY10dHTV9u97yrNBq4xHqoyJzrrj9/Lj/vthuJs6wpZDuJVbvZ1hs5rF7+a05tvE5N1kwqiUzsIxtY2l3M6By7P99/6JyrkYpIC44tgSqHo2pIS6gtLRAAAGfklEQVR4nO2YiVLbSBCGpTl8SLKx5VPCJ8KwAQKYhA3JAtl9/5fa7hmdHMEIqkLt/l9xSLLUM//0NbLjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvov0Ar6Ydjx8O8tO+MRaomtZULyJe9XTLraAbNcce0MMyX4WFlnQ6VXWFOA0tpQxevq/gkZCaIzcFPZ0JWfCJmL5qIlUamhbibR6pOXJZSCTIH3pU05KhlhA5a+aM6uZISciUD/036agppOyFumFdCGnSHNzhyKmdH8zbhdQlFzLwyeIu/vjlNN9TiHqUq8EvsjcT0mg9o+NhKY4P4/jxTdkI7yNEUR1f+0N/qBeeiTW6ELS7LX/YWrbpfD/qdKLs5h6fBMoKUW225w4KW+2oE7Wd4Kjlt8IBe0HR/FX8x6eTk5PTs8/Wuh21wSP4615ZCH1uOlKvnpCeliLkmUl/lg4TCi5FrpBaOQF9kBelMZ10M4/0Oa50u2QrkjKczakrCFe4ktxCblDnFwmzTZJvh9mYfZqJqdquH5Q8omYhHe29qIOFhKWq1Tdz064ZmGfuHhlv77EGV7Aa6Sg6kwep81rkgbkVovu0AFUdToeMRGTMWiPFNPPzL5eXiWV7cWi0OVNeNhqW/krtFULoOtncIcharl2ItI0cmdmFrtDT+bzjcz/gKzNe6L7Xi/xQewEXWKmtEBbQcqwQI1O0K6N2zOz8VWft80gNJ749v9omW/PDv1cxCVEjzc9Pohnd7fcKj+wLDotdkoVDS+ZC5MJc9IY2cNSEvDCjg65rHE6fTMy/kISMzS3r9CEWQktHf6OKfRYifHKZ06e5iYUTq09blvHl6/VFcnm53d6xR/gu68om6VCZkIEJtp2SniNTF1iPqLQtqgHZ4/g8kG4WMSYD16Q9NFnqpyFgPGJaiKiULOMR++iBja3P7IqL60OqW9cXJ8n2ioREHJhtm/ZmpayQOa+Ou1tre9DZ+1aIWfx+ozGyQtSKY2xRBL/yKYlY7YiGCjMhrtehzaKsbHM4R7QtqiOXjcVfWUZsBrmN//yWbM+NxmpCGyEep5y7iwrnufLrjbpDnxwkXOuROWeL1K1uM12eJX0wMf+FnXfaRxbsE92vCvHtYd8au0uSG7ZCZfg2vr35vv1x6+xRCI8fCnHZ23LXPdOTDTGieWuZ1gAWovaFiVYph+18IPYEeSB0CiGBUei2itFZSLrWPWvsr2R7lxZdFrL5fqYo51yxX44gts9DUmXfsS0+ISToaq757mQ1Hot8GmstuCrYlFTOhE5GpqisSkLoYGK2jLmSjsmmspC75PIs7epxHJ9tNnckhDzSKc/BhBYXR7GqLUQFJEIsFbt/rnMh3NypSUoby1QvqU5yNbNluBAS8DtVdvUpIdfJ5Z1jeoejbtXN5v6a1NMsJo+EBF2uIEd1hZim0bWH08wj6U7J2LcfDWlagbCZUhbieBTaoQifFUJV6yb9kFrIj/v7Qyom1H6zJ0wW2qqlJtyFd9vTspB29RK3hnQZJmmOOI39fPqymCF9LKKHQmiDw0Vz8pyQ+Nt2e7/Z3DP0d3OqYtXmlEjToZGvGBUd6rG2PO4iREy6BceU2NzruYU5q6xqDYQwrfKoyBleeM4Z56EQmgV3eH3wjBB1fpIkpGTDYuiXGopyupzZK6p2vbHZ3mWdvWlGebwRf1JIVp5Ma6eFVFz1/INltyVTIU1uD8PVMuSpH6dPds39y7SqVN7ZOzwNcfykkFjF16eFkvuflPHUgdmy6xOUhtPSpvGILe2wZ3RasgpHxEzbTYvQ+1SH2cokvUINKjfqcRHLm99AFzGgyHMUEhSfSnWkzMuvOaRW6Py8ShKj4+9/vpqG4qh5mC0lRWxQeh/h6Jbrl99chw+EmIAYhexpvTdyfFOllLMI00bSLR71izgjIfxwEcxLOnNDSqwpHaQemUs2Ft9yjt9cXFGCnN4dBrZ+0RDkbx5Ch2Pea1E7tnssj4/0rO4reLC/6FRzTHXGy1m/fIW1TeuZ5w7CVC/2ouUyevkV6lWopxpqdVU8SulW3S9dPhLcbo5fvu3DE/CLUvvl+z4208GI3rmk/7vn8WZCu4N8jy/EfieKd++ko/umLxM/AIpaiBbh+A3ftn8UvH77P6ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/yP/AkZxYPsd+unoAAAAAElFTkSuQmCC",
      link: "https://www.easyknock.com/",
      position: "Business Development Internship",
      details: [
        "Extracted qualitative and quantitative data from targeted market segments to optimize revenue growth",
        "Conducted, interpreted, and presented market research for prospective investments",
        "Provided analytical support including assistance in evaluating and structuring transactions",
        "Collaborated on special projects for sales and marketing development",
      ],
      location: "Manhattan, NY",
      dates: "Jan. 2018-May 2018",
    },
  ];

  const displayResumeCard = experienceArray.map((experience) => {
    return (
      <ResumeCard
        key={uuidv4()}
        {...experience}
        scrollShowAnimation={scrollShowAnimation}
      />
    );
  });

  return (
    <div className="pages-container" id="resume">
      <div className="pages-header-container">
        <h2 className="pages-name">Resume</h2>
        <div className="header-backdrop"></div>
      </div>
      <span className="project-intro-container">
        <h3>Professional Experience</h3>
        <p className="page-intro">
          Please take a look at my previous work history where I have explained
          my responsibilities and duties.
        </p>
      </span>
      <div className="resume">{displayResumeCard}</div>
    </div>
  );
}

export default Resume;
