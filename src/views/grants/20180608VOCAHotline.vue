<template lang="html">
  <section class="page">
    <page-header header="Notice of Funding Opportunity" :expired="expired" />

    <div class="container-fluid side-spacer">
      <div class="row">


        <div class="col-md-3 hidden-sm-down">

          <ul class="sticky nav flex-column sidenav-toc">
            <li class="nav-item">
              <a class="nav-link active" href="#app">Introduction</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#notice-of-funding-opportunity">Notice of Funding Opportunity</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#eligibility">Eligibility</a>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="#deadline">Deadline</a>
            </li>


            <li class="nav-item">
              <a class="nav-link" href="#timeline">Timeline</a>
            </li>
            <!-- 
  <li class="nav-item">
    <a class="nav-link" href="#download-application-documents">Download Application Documents</a>
  </li> -->

            <!-- <li class="nav-item">
    <a class="nav-link" href="#updates-and-responses-to-applicant-questions">Updates and Responses to Applicant Questions</a>
  </li>  -->

            <li class="nav-item">
              <a class="nav-link" href="#reporting">Reporting</a>
            </li>


          </ul>
        </div>







        <div class="col-md-9">
          <div id="grant-posting-new">




            <h1 class="spacerBottom50">{{title}}</h1>

            <!-- START CONTENT: -------------------------------------------------- 

                  Step 1: Enter HTML here
                  Step 2: Update routing in routes.js

            --------------------------------------------------------------------- -->



            <!-- <h1 id="ffy16-victim-of-crime-act-voca-notice-of-funding-opportunity-statewide-domestic-violence-hotline-services-program">FFY16 Victim of Crime Act (VOCA) Notice of Funding Opportunity: Statewide Domestic Violence Hotline Services
              Program</h1> -->

            <p class='text-center' style="margin-bottom: 45px;" id="notice-of-funding-opportunity">
              <a href="/static/grants/20180608VOCAHotline/VOCADVhotlineNOFO.pdf" style="font-weight: 900">Download Notice of Funding Opportunity</a>
            </p>
            <p>The Illinois Criminal Justice Information Authority seeks to fund a Statewide Domestic Violence Hotline Service
              program. The grant will be made with Federal Fiscal Year 2016 (FFY16) Victim of Crime Act (VOCA) funds. A total
              of $455,000 in funding is available through this solicitation for use over a period of 12 months.</p>
            <p>
              <strong>Application deadline: 11:59 p.m., July 8, 2018.</strong>
            </p>
            <h2 id="program-requirements">Program requirements</h2>
            <p>The Statewide Domestic Violence Hotline Services program will fund advocates positions(s) to provide direct service
              to victims through a statewide hotline. The City of Chicago Department of Family and Support Services may contract
              with an external victim service provider to staff hotline services, but is required to submit at the time of
              application a proposed contract between the agency and the victim service provider detailing advocate services
              and costs.</p>
            <p>The funded programs will be required to submit quarterly progress reports.</p>
            <h2 id="eligibility">Eligibility Information</h2>
            <p>The applicant must be pre-qualified through the Grant Accountability and Transparency Act (GATA) Grantee Portal,
              <a href="http://www.grants.illinois.gov">www.grants.illinois.gov</a>, to become eligible to apply for an award. Applicants must have completed the GATA
              pre-qualification process and received approval of their Internal Control Questionnaire (ICQ) by the date of
              application to be considered for funding. Applications from agencies that have not received ICQ approval will
              not be reviewed.</p>
            <h2 id="eligible-applicants">Eligible Applicants</h2>
            <p>This solicitation is open to the City of Chicago Department of Family and Support Services.</p>
            <h2 id="deadline">Deadline</h2>
            <p>Completed application materials must be emailed to
              <a href="mailto:CJA.VOCANOFO@Illinois.gov">CJA.VOCANOFO@Illinois.gov</a> by 11:59 p.m., July 8, 2018, to be considered for funding. Proposals will not
              be accepted by mail, fax, or in-person. Incomplete applications will not be reviewed. Late submissions will
              not be reviewed.</p>
            <h2 id="available-funds">Available Funds</h2>
            <p>A total of $455,000 in funding is available through this solicitation. Funding minimum and maximum values are
              based on the population served, according to the following standards:</p>
            <h2 id="period-of-performance">Period of Performance</h2>
            <p>Funding is available for the period of September 1, 2018 through August 31, 2019. Based on program performance
              and fund availability, the Authority may recommend allocation of funding to support an additional 24 months.</p>
            <h2 id="contact-information">Contact Information</h2>
            <p>Ronnie Reichgelt</p>
            <p>Illinois Criminal Justice Information Authority</p>
            <p>300 West Adams, Suite 200</p>
            <p>Chicago, IL 60606</p>
            <p>
              <a href="mailto:Ronnie.Reichgelt@Illinois.gov">Ronnie.Reichgelt@Illinois.gov</a>
            </p>
            <h2 id="timeline">Timeline</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align:left">Task</th>
                  <th style="text-align:left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align:left">NOFO posted</td>
                  <td style="text-align:left">June 8, 2018</td>
                </tr>
                <tr>
                  <td style="text-align:left">
                    <strong>Applications due</strong>
                  </td>
                  <td style="text-align:left">
                    <strong>11:59 p.m., July 8, 2018</strong>
                  </td>
                </tr>
                <tr>
                  <td style="text-align:left">Budget Committee review/approval of recommended designation</td>
                  <td style="text-align:left">August 2018</td>
                </tr>
                <tr>
                  <td style="text-align:left">Projected program start date</td>
                  <td style="text-align:left">September 1, 2018</td>
                </tr>
              </tbody>
            </table>
            <h2 id="reporting">Reporting</h2>
            <p>The recipients must submit quarterly financial reports, quarterly progress reports, final financial and progress
              reports, and, if applicable, an annual audit report in accordance with the CFR Part 200 Uniform Requirements.
              Future awards and fund drawdowns may be withheld if reports are delinquent.</p>




            <!-- //END CONTENT --------------------------------------------------- -->

          </div>
        </div>

      </div>
    </div>

    </div>

    <sticky-sidebar />
    <smooth-scroll />




  </section>

  </section>
</template>

<script>
  import utilities from "@/utilities";
  import PageHeader from "@/components/PageHeader";
  import SmoothScroll from "@/components/SmoothScroll";
  import StickySidebar from "@/components/StickySidebar";
  //import StickySidebar from '@/components/StickySidebar'

  const description = `The Illinois Criminal Justice Information Authority seeks to fund a Statewide Domestic Violence Hotline Service program. The grant will be made with Federal Fiscal Year 2016 (FFY16) Victim of Crime Act (VOCA) funds. A total of $455,000 in funding is available through this solicitation for use over a period of 12 months.`;
  const title =
    "FFY16 Victim of Crime Act (VOCA) Notice of Funding Opportunity: Statewide Domestic Violence Hotline Services Program"
    ;
  const created = "2018-06-08";
  const posted = "2018-06-08";
  const expired = "2018-07-18";
  const type = "grant";
  const status = "live";

  export default {
    name: utilities.camelCase(utilities.nameCheck(title)),
    pageData: {
      created,
      description,
      posted,
      expired,
      title,
      type,
      status
    },
    mounted() { },
    metaInfo: {
      // title will be injected into parent titleTemplate
      title,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: utilities.stripTags(description)
        }
      ]
    },
    components: {
      PageHeader,
      SmoothScroll,
      StickySidebar
    },
    data() {
      return {
        title,
        expired
      };
    }
  };
</script>

<style lang="css" scoped>
  h2 {
    margin-top: 60px !important;
  }

  h3 {
    margin-top: 40px !important
  }

  #grant-posting-new a {
    padding-bottom: 10px;
    text-decoration: underline;
  }

  a.nav-link {
    text-decoration: none
  }

  #grant-posting-new a {
    color: #2c2fb3 !important
  }

  table {
    margin-bottom: 50px;
  }

  a.fix {
    margin-top: 30px;
    margin-bottom: 50px;
    font-weight: 700;
    text-decoration: none !important
  }

  a.btn-primary {
    text-decoration: none !important
  }
</style>