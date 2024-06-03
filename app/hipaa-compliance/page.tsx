import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';



function renderBreachCompliance() {

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 className="display-6">Breach Notification Rules</h2>
      </div>
    </section>
  )
}

function renderZenSpaceAppSecurityCompliance() {
  return (
    <>  
      <p className="mt-4">
        At ZenSpaceApp we are committed to ensuring that our customers are protected from
        becoming vistims of fraud and abuse.<br/>
        We have implemented HIPAA security guidelines whenever the ePHI is in transit or rest. At rest
        means the device on which ePHI has been saved (cloud-servers, databases), and in transit relates to any electronic
        communications (video, messaging, file transfer). <br /> <br/>
      
        At ZenSpaceApp we have implemented the following safeguards as required by the <mark>HIPAA Security Rule</mark>:
      </p>

      <div className="pt-4 pb-4">
        <h3 className="mt-4">45 CFR § 164.308 - Administrative safeguards.</h3>
          <p>The Security Rule states administrative safeguards are, “administrative actions,
          and policies and procedures, to manage the selection, development,
          implementation, and maintenance of security measures to protect ePHI and to
          manage the conduct of the covered entity’s workforce in relation to the protection
          of that information <br /></p>
        
        <p className=" mt-4">The administrative <mark>safeguards</mark> consists of: </p>
        
        <div>
          <h5>The Security Management Process</h5>
          <p>The Security Management Process covers the implementation of policies and
            procedures to prevent, detect, contain, and correct security violations.</p>
        
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Risk analysis: A risk analysis is a procedure by which the entire organization is assessed for potential security
              vulnerabilities and risks to the confidentiality, integrity, and availability of
              electronic protected health information (ePHI) held by the covered entity.
              <span className="hipaa-answer">
                We believe we are our part a security co and part a healthcare co. That we are entrusted with sensitive 
                and we conduct vey aspect of our work with security as the highest priority. Staff and engineers that 
                come in contact with ePHI are given strict guidelines how a given piece of data is to be handled. 
              </span>
            </li>          
            <li>Risk Management (Required): Once a risk analysis has been conducted, and all potential security vulnerabilities
              identified, the covered entity must then implement security measures sufficient to
              reduce those risks and vulnerabilities to a reasonable and appropriate level.
                <span className="hipaa-answer">
                  We have not identified any security vulnerabilities thus far. But we are constantly improviing our
                  manual and automated testing to catch any vulnerabilities before it manifests itself.
                </span>
              </li>
            <li>Sanction Policy (Required): A sanction policy must be put in place to allow the covered entity to take action
              against workforce members who fail to comply with the security policies and
              procedures of the covered entity.
              <span className="hipaa-answer">
                When we hire people we make it crystal clear the importance of security at our workplace. We train them
                with our security processes and procedures. So we hope we don&apos;t have to sanction anyone in the future. But if
                we find anyone in breach of protocols - they will have to retake <mark>HIPAA Security and Privacy rules training</mark>, and 
                ensure <mark>processes</mark> are not skipped.
              </span>
            </li>
            <li>Information System Activity Review (Required): It is essential all covered entities implement a system – preferably automated –
              that logs activity relating to ePHI; in particular any requests to access patient
              records or make amendments to ePHI. Audit logs must be created, and the system
              must be capable of generating security incident tracking reports.
              <span className="hipaa-answer">
                We have a BAA agreement with Amazon Web Services (AWS) and Google Cloud where ZenSpaceApp application is hosted and deployed. Both of these 
                cloud service providers support HIPAA compliance, as described in their documentation. They also provide logging and 
                auditing capabilities to identify any potenital breach or malicilous activity. Additionaly all sensitive data is encrypted
                before being stored on these cloud servers (databases) rendering it useless without matching crypto keys.
              </span>
              </li>
          </ol>
        </div>

        <div>
          <h5 className="mt-4">Assigned Security Responsibility</h5>
          <p>A HIPAA security officer should be appointed and given responsibility for the
            development and implementation of HIPAA policies and procedures relating to
            data security.</p>
          <h6 className="mt-4">Implementation specifications:</h6>
          <span className="hipaa-answer">
            Rupesh Pandey is responsible for the development, implementation and adherence to HIPAA Security and Privacy rules.
          </span>
        </div>

        <div>
          <h5 className="mt-4">Workforce Security</h5>
          <p>Policies and procedures to ensure members of the workforce have appropriate access to ePHI, as
            required under the Information Access Management standard, while others must
            be prevented from viewing ePHI.</p>
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Authorization and/or Supervision (Addressable): Policies must be developed and procedures implemented which allow users to be
              granted authorization to access or amend ePHI commensurate with their position. <br />
              <span className="hipaa-answer">
                No individual/employee at ZenSpaceApp has access or can amend any ePHI due to its encrypted nature. ePHI can only
                be amended by clients using our mobile apps.</span>
            </li>
            <li>Workforce Clearance Procedure (Addressable): A clearance procedure must exist that assesses whether the level of access to ePHI
              an individual workforce member needs to perform his or her duties is appropriate.
              <span className="hipaa-answer">
                All access to ePHI is via secured programming endpoints. Database access is for administrators
                and they cannot view since the stored data is encrypted.</span>
            </li>
            <li>Termination Procedures (Addressable): Just as procedures must be developed to grant users access to essential ePHI,
              procedures must also be in place to terminate those access rights when they are no
              longer required, such as following a change in the individual’s duties or a_er the
              termination of an employment contract.
            </li>
          </ol>
        </div>

        <div>
          <h5 className="mt-4">Information Access Management</h5>
          <p>The fourth standard covers the management of access to ePHI by members of the
            workforce who need to view, amend or update ePHI as part of their daily duties.
            Controlling access is an essential element of data security that limits the potential
            for accidental or deliberate disclosure of PHI to non-authorized individuals, while
            also limiting the possibility of erasure or alteration of ePHI</p>
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Isolating Healthcare Clearinghouse Functions (Required):
              <span className="hipaa-answer">
                ZenSpaceApp does not perform any functions of a clearinghouse.
              </span>
            </li>
            <li>Access Authorization (Addressable): This speci:cation is similar to that stated in the Workforce Security section, but
              instead of determining access rights, Access Authorization requires policies and
              procedures to be implemented for granting access to ePHI, such as through a
              particular workstation or for speci:c transactions, programs, processes, or other
              mechanisms.
              <span className="hipaa-answer">
                No function at ZenSpaceApp require any direct interaction with patient ePHI.</span>
              </li>
            <li>Access Establishment and Modification (Addressable): A covered entity must implement policies and procedures that, based upon the
              entity’s access authorization policies, establish, document, review, and modify a
              user’s right of access to a workstation, transaction, program, or process.
              <span className="hipaa-answer"></span>
            </li>
          </ol>
        </div>

        <div>
          <h5 className="mt-4">Security Awareness and Training</h5>
          <p>One of the most important elements of the administrative safeguards is the
            provision of training on the HIPAA Security and Privacy Hules, not only for the
            staff granted access to ePHI or may otherwise come into contact with it, but all
            members of the workforce, including management.</p>
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Security Reminders (Addressable): The provision of training ensures the workforce is fully aware of the HIPAA
              Privacy and Security Rules; however, policies frequently need to be updated and
              these changes must be communicated to staff. It is also important to provide the
              workforce with reminders on the importance of data security, policies and
              procedures.
              <span className="hipaa-answer">
                All reminders are documented and introduced to staff members when they join the workforce.
                All security measures dealing with architecture and programming activities are also well documented. We are
                constantly evaluating and improving our security processes and implementation.
              </span>
            </li>
            <li>Protection from Malicious Software (Addressable): All members of the workforce must receive training to help them identify
              potentially dangerous software and staff should be aware of how, and to whom,
              they should report the potential installation of malicious so_ware. This includes
              developing policies that restrict how the Internet is used and what can be
              downloaded.
              <span className="hipaa-answer">
                All of our software is hosted on Amazon Web Services (AWS) and Google Cloud with whom we have a Business Associate (BA)
                agreement and are responsible for all necessary security precautions to detect malicious software. All our employee
                workstations are kept up-to-date with security updates.
              </span>
            </li>
            <li>Log-in Monitoring (Addressable): Log-in Monitoring (Addressable)
              Procedures must be developed for monitoring log-in attempts and reporting
              discrepancies. A system must be in place that can log access attempts, such as
              multiple attempts to gain access to ePHI using incorrect passwords or usernames.

              <span className="hipaa-answer">
                ePHI cannot be accessed by any individual or employee even if they can get acesss to usernames.
                Using incorrect passwords likewise has no bearing on accessing ePHI.
              </span>
            </li>

            <li>Password Management (Addressable): Procedures must be developed to cover creating, changing, and safeguarding
            passwords used to access ePHI.</li>
            <span className="hipaa-answer">
              Rolling passwords are used and employees are advised how to safeguard passwords and scripts
              where these passwords are used.
            </span>
          </ol>
        </div>

        <div>
          <h5 className="mt-4">Security Incident Procedures</h5>
          <p>Covered entities must therefore
            implement procedures that allow these incidents to be reported quickly, and to the
            appropriate personnel.</p>
          <h6 className="mt-4">There is only one implementation specification:</h6>
          <ol>
            <li>Response and Reporting (Required):
              This specification states that all HIPAA-covered entities must be able to “identify
              and respond to suspected or known security incidents; mitigate, to the extent
              practicable, harmful effects of security incidents that are known to the covered
              entity; and document security incidents and their outcomes.
              <span className="hipaa-answer">
                Our security officer is the primary contact internally and externally for reporting
                an incident. He is then responsible for taking remedial measures to mitigate the threat,
                and also notifying the affected parties. These incidents are documented to prevent future 
                incidents and solidify our systems, and also available upon request.
              </span>
            </li>
          </ol>
        </div>
        
        <div>
          <h5 className="mt-4">Contingency Planning</h5>
          <p>Access to ePHI must be maintained at all times, even during emergencies.
            Procedures must therefore be developed to ensure that this is the case. Establish 
            (and implement as needed) policies and procedures for responding to
            an emergency or other occurrence (for example, fire, vandalism, system failure, and natural
            disaster) that damages systems that contain ePHI</p>
          
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Data Backup Plan (Required). Entities must establish and implement procedures to create and maintain
              retrievable exact copies of ePHI.
              <span className="hipaa-answer">
                We have daily database backups and allows us to recover data in case of a threat or ransomware 
                attack without any disruptions to our services.
              </span>
            </li>
            <li> Disaster Recovery Plan (Required).
              HIPAA-covered entities must establish and implement procedures to restore any
              loss of data, and this plan must be reviewed, revised, and tested frequently.
              <span className="hipaa-answer"> 
                Achieved by following the data backup plan.
              </span>
            </li>
            <li>
              Emergency Mode Operation Plan (Required). Even during a power outage or other emergency situation 
              such as a server malfunction, procedures must exist to ensure the continuation of critical business 
              processes and the protection of ePHI while a covered entity is operating in
              emergency mode.
              <span className="hipaa-answer"> 
                AWS and Google Cloud provide the tools to retrieve data and ensure business processes are not 
                affected for too long, and to bring back up the APIs and applications in a 
                controlled manner.
              </span>
            </li>
            <li>
            Testing and Revision Procedures (Addressable). All Contingency Plan implementation speci:cations must be subjected to tests to
              ensure data can be restored. Emergency operational procedures must similarly be
              subjected to live tests to ensure they are eVective. These tests should be conducted
              on a regular basis, and policies and procedures revised as appropriate.
              <span className="hipaa-answer">
                We maintain application health and security by rigorous internal testing (manual and automatic) before 
                every deployment of our software.
              </span>
            </li>
            <li>
              Applications and Data Criticality Analysis (Addressable).
              Covered entities are required to “Assess the relative criticality speci:c applications
              and data in support of other contingency plan components.”
              <span className="hipaa-answer">
                AWS and Google Cloud provide the necessary tools to restore data in a secure manner.
              </span>
            </li>
          </ol>

        </div>
        
        <div>
          <h5 className="mt-4">Evaluation</h5>
          <p>
            This standard covers the monitoring and evaluation of all security measures to
            ensure they continue to offer the appropriate level of protection to keep ePHI
            secure.
            </p>
            <span className="hipaa-answer">
              We are constantly evaluating our security procedures and upgrading our coding practices to employ the 
              best technology available to secure patient ePHI.
            </span>
        </div>
        
        <div>
          <h5 className="mt-4">Business Associate Contracts and Other Arrangements</h5>
          <p className="">A covered entity, in accordance with with § 164.306 [the
          Security Standards: General Rules], may permit a business associate to create, receive, maintain,
          or transmit ePHI on the covered entity’s behalf only if the covered entity obtains satisfactory
          assurances, in accordance with § 164.314(a) [the Organizational Requirements] that the
          business associate will appropriately safeguard the information.</p>      
          <span className="hipaa-answer">
            We have BAA agreements with <mark>Amazon Web Services (AWS) and Google Cloud</mark> as all our software is
            deployed on their platform.
          </span>
        </div>
    </div>
      
    <div className="pt-4 pb-4">
        <h3 className="mt-4">45 CFR § 164.310 - Physical safeguards.</h3>
        <p>
          The physical safeguards are a set of rules and guidelines outlined in the HIPAA
          Security Rule that focus on physical access to ePHI and how PHI is stored.
          There are four standards in the physical safeguards:
        </p>
        
        <div>
          <h5 className="mt-4">Facility access controls</h5>
          <p>
            Implement policies and procedures to limit physical access to its electronic information systems 
            and the facility or facilities in which they are housed, while ensuring that properly authorized access is allowed.
          </p>
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Contingency operations (Addressable). Establish (and implement as needed) procedures that
              allow facility access in support of restoration of lost data under the disaster recovery
              plan and emergency mode operations plan in the event of an emergency.
              <span className="hipaa-answer">
                N/A. ZenSpaceApp does not own or operate any facilities.
              </span>
            </li>
            <li>Facility security plan (Addressable). Implement policies and procedures to safeguard the facility and the equipment therein from unauthorized physical access, tampering, and theft.
              <span className="hipaa-answer">
                N/A. ZenSpaceApp does not own or operate any facilities.
              </span>
            </li>
            <li>Access control and validation procedures (Addressable). Implement procedures to control and validate a person&apos;s access to facilities based on their role or function, 
              including visitor control, and control of access to software programs for testing and revision.
              <span className="hipaa-answer">
                N/A. ZenSpaceApp does not own or operate any facilities.
              </span>
            </li>
            <li>Maintenance records (Addressable). Implement policies and procedures to document repairs and modifications to the physical 
              components of a facility which are related to security (for example, hardware, walls, doors, and locks).
              <span className="hipaa-answer">
                ZenSpaceApp does not own or operate any facilities. All of our equipments for development and testing are 
                secured and kept up-to-date with software updates.
              </span>

            </li>
          </ol>
        </div>
        <div>
          <h5 className="mt-4">Workstation use.</h5>
          <p>Implement policies and procedures that specify the proper functions to be performed, the manner in which 
            those functions are to be performed, and the physical attributes of the surroundings of a specific 
            workstation or class of workstation that can access electronic protected health information.
          </p>
          <span className="hipaa-answer">
            Only authorised personnel have access to our machines and equipment.
          </span>
        </div>
        
        <div>
          <h5 className="mt-4">Workstation security.</h5>
          <p>Implement physical safeguards for all workstations that access electronic protected health information, to restrict access to authorized users.
          </p>
          <span className="hipaa-answer">
            All development work and handling of patient health information is performed on
            secured equipment and over encrypted lines.
          </span>
        </div>

        <div>
          <h5 className="mt-4">Device and media controls.</h5>
          <p> Implement policies and procedures that govern the receipt and removal of hardware and electronic media that 
            contain electronic protected health information into and out of a facility, and the movement of these items within the facility.
          </p>
          <h6 className="mt-4">Implementation specifications:</h6>
          <ol>
            <li>Disposal (Required). Implement policies and procedures to address the final disposition of electronic 
              protected health information, and/or the hardware or electronic media on which it is stored.
              <span className="hipaa-answer">
                ePHI is never stored locally on any machines, only in the cloud and accessed using web-services.
              </span>
            </li>
            <li>Media re-use (Required). Implement procedures for removal of electronic protected health information 
              from electronic media before the media are made available for re-use.
              <span className="hipaa-answer">
                ePHI is never stored locally on any machines, only in the cloud and accessed using web-services.
              </span>
            </li>
            <li>Accountability (Addressable). Maintain a record of the movements of hardware and electronic media and any person responsible therefore.
              <span className="hipaa-answer">
                We employ logging capabilities provided by AWS and Google Cloud to ensure
                only authorised users can access this information.
              </span>
            </li>
            <li>
              Data backup and storage (Addressable). Create a retrievable, exact copy of electronic protected health 
              information, when needed, before movement of equipment.
              <span className="hipaa-answer">
                Data is stored in the cloud and is regularly backed-up, easily retrieveable and not tied to any particular equipment.
              </span>
            </li>
          </ol>
        </div>

    </div>

    <div className="pt-4 pb-4">
      <h3 className="mt-4">45 CFR § 164.312 - Technical safeguards.</h3>
      <p>
        Technical safeguards in the <mark>HIPAA Security rule</mark> exist to protect communications containing
        PHI when they are transmitted electronically over open networks. The Security Hule technical safeguards 
        concern the technology and related policies and procedures that protect ePHI and control 
        access to it, and they apply to all forms of ePHI.<br />
        Technical safeguards constists of:
      </p>

      <div>
        <h5 className="mt-4">Access control</h5>
        <p>
          Implement technical policies and procedures for electronic information systems that maintain electronic 
          protected health information to allow access only to those persons or software programs that have been
          granted access rights as specified in § 164.308(a)(4).
        </p>

        <h6 className="mt-4">Implementation specifications:</h6>
        <ol>
          <li>Unique user identification (Required). Assign a unique name and/or number for identifying and tracking user identity.
            <span className="hipaa-answer">
              A unique identifier is generated for every user (patient, provider, admin) that creates an account with ZenSpaceApp.
            </span>
          </li>
          <li>Emergency access procedure (Required). Establish (and implement as needed) procedures for obtaining 
            necessary electronic protected health information during an emergency.
            <span className="hipaa-answer">
              PHI is backed up daily and in the event of an emergency it would be trivial for us to switch data 
              sources for PHI.
            </span>
          </li>
          <li>Automatic logoff (Addressable). Implement electronic procedures that terminate an electronic session after a predetermined time of inactivity.
            <span className="hipaa-answer">
              ZenSpaceApp used short-lived tokens that needs to be refreshed frquently for accessing PHI.
            </span>
          </li>
          <li>Encryption and decryption (Addressable). Implement a mechanism to encrypt and decrypt electronic protected health information.
            <span className="hipaa-answer">
              ePHI is encrypted using 256-bit encryption while in transit (TLS) and at rest (symmetric and asymmetric key cryptography).
            </span>
          </li>
        </ol>
      </div>
      
      <div>
        <h5 className="mt-4">Audit controls</h5>
        <p>
          Implement hardware, software, and/or procedural mechanisms that record and examine 
          activity in information systems that contain or use electronic protected health information.
        </p>
        <span className="hipaa-answer">
          Logging capabilities provided by AWS, Google Cloud and custom ZenSpaceApp is used for monitoring 
          the footrprint.
        </span>
      </div>

      <div>
        <h5 className="mt-4">Integrity</h5>
        <p>
          Implement policies and procedures to protect electronic protected health information from improper alteration or destruction.
        </p>
        <h6>Implementation specification:</h6>
        <span className="hipaa-answer">
          PHI cannot be deleted or modified by unauthorized users. Only the patient and the provider can read or write this data. 
        </span>
      </div>
      
      <div>
        <h5 className="mt-4">Person or entity authentication. </h5>
        <p>
          Implement procedures to verify that a person or entity seeking access to electronic 
          protected health information is the one claimed.
        </p>
        <span className="hipaa-answer">
          Users are verified via email or multi-factor authentication using a phone number. Once verified authenticated users
          access the PHI using their email/password or phone number/one-time-password combinations.
        </span>
      </div>

        <div>
          <h5 className="mt-4">Transmission security</h5>
          <p>
            Implement technical security measures to guard against unauthorized access to electronic protected health
            information that is being transmitted over an electronic communications network.
          </p>
          <h6>Implementation specifications::</h6>
          <ol>
            <li>Integrity controls (Addressable). Implement security measures to ensure that electronically transmitted 
              electronic protected health information is not improperly modified without detection until disposed of.
              <span className="hipaa-answer">
                PHI is encrypted first and then transferred using TLS (256-bit encryption). In-flight data hence has no threat of modification or tampering.
              </span>
            </li>
            <li>Encryption (Addressable). Implement a mechanism to encrypt electronic protected health information whenever deemed appropriate.
            <span className="hipaa-answer">
              PHI is encrypted while in transit and at rest using 256-bit encryption.
            </span>
            </li>
          </ol>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="mt-4">§ 164.316 Policies and procedures and documentation requirements.</h3>
        <p>A covered entity or business associate must, in accordance with § 164.306.</p>
      </div>
      <div>
        <h5 className="mt-4">Policies and procedures.</h5>
        <p>Implement reasonable and appropriate policies and procedures to comply with the standards,
          implementation specifications, or other requirements of this subpart, taking into account those factors specified
          in § 164.306(b)(2)(i), (ii), (iii), and (iv). This standard is not to be construed to permit or excuse an action
          that violates any other standard, implementation specification, or other requirements of this subpart. A covered
          entity or business associate may change its policies and procedures at any time, provided that the changes are
          documented and are implemented in accordance with this subpart.</p>
        <span className="hipaa-answer">
          We have documented our Notice of Privacy Practices (NPP) and security procedures online and here.
        </span>
      </div>
      <div>
        <h5>Documentation.</h5>
        <p>Maintain the policies and procedures implemented to comply with this subpart in
          written (which may be electronic) form; and if an action, activity or assessment is
          required by this subpart to be documented, maintain a written (which may be electronic) record of the action,
          ctivity, or assessment.</p>
          <h6>Implementation specifications:</h6>
        <ol>
          <li>Time limit (Required). Retain the documentation required by paragraph (b)(1) of this section for
            6 years from the date of its creation or the date when it last was in effect, whichever is later.
            <span className="hipaa-answer">
              Documentation will be stored for at least 6 years.
            </span>
          </li>
          <li>Availability (Required). Make documentation available to those persons responsible for
             implementing the procedures to which the documentation pertains.
            <span className="hipaa-answer">
              All documentation is available internally, and online for public consumption.
            </span>
          </li>
          <li>
            Updates (Required). Review documentation periodically, and update as needed, in response to 
            environmental or operational changes affecting the security of the electronic protected health information.
            <span className="hipaa-answer">
              Staying up-to-date with HIPAA-compliance is our top priority.
            </span>
          </li>
        </ol>
      </div>
    </>
  )
}


function renderSecurityCompliance() {

  return (
    <section style={{padding: '80px 0'}}>
      <div className="container">
        <h2 className="display-6">Security Compliance</h2>
        {renderHIPAASecurityRule()}
        {renderZenSpaceAppSecurityCompliance()}
      </div>
    </section>
  )
}

function renderHIPAASecurityRule() {
  return (
    <>
      <h5 className="mt-4">HIPAA Security Rule</h5>
      <em>“The HIPAA Security Rule establishes national standards to protect individuals’ electronic
        personal health information that is created, received, used, or maintained by a covered entity.
        The Security Rule requires appropriate administrative, physical, and technical safeguards to
        ensure the confidentiality, integrity, and security of electronic Protected Health Information <mark>(ePHI)</mark>”.</em>
    </>
  )
}


function renderZenSpaceAppPrivacyCompliance() {
  return (
    <div>
      <h3 className="mt-4">ZenSpaceApp Notice of Privacy Practices <mark>(NPP)</mark></h3>
      <ul className="hipaaanswer">
        <li>We may disclose your Personal Health Information (<mark>PHI</mark>) to facilitate treatment, payment or healthcare
          operations. We take maximum precautions to disclose only the
          minimum necessary information to achieve the required purpose.<mark>(HIPAA Privacy Rule §45 CFH 164.501)</mark></li>
        <li>
          We do NOT disclose or sell your PHI for marketing, analytics or any other purposes without your expressed written permission. 
        </li>
        <li>
          We also make it very easy to access (<mark>HITECH Act</mark>) and correct your personal health information at any 
          time using our mobile health applications available on 
          multiple platforms.
        </li>
        <li>
          <mark>De-identification of Protected Health Information</mark>. In the event we use your health information for research and analytics
            pruposes it&apos;s stripped of any identifiable information that can trace it back to you.
          We also employ specialists under the HIPAA <mark>Safe Harbor</mark> method determine what consititues minumum needed information for 
          statistical analyses and priniciples, and the information tha need to be stripped before any information can be used or stored.
        </li>
        <li>You have the right to requestlist of the recorded disclosures of PHI for 6 years prior to the date that the request is made.
        </li>
      </ul>
    </div>
  )
}
    
function renderHIPAAPrivacyRule() {
  return (
    <>
      <h5 className="mt-4">HIPAA privacy rule</h5>
      <em>The Rule requires appropriate safeguards to protect the privacy of personal health
      information, and sets limits and conditions on the uses and disclosures that may be made of
      such information without patient authorization. The Rule also gives clients rights over their
      health information, including rights to examine and obtain a copy of their health records and to
      request corrections</em>
    </>
  )
}
function renderPrivacyCompliance() {

  return (
    <section className="section">
      <div className="container">
        <h2 className="display-6">Privacy Compliance</h2>
        {renderHIPAAPrivacyRule()}
        {renderZenSpaceAppPrivacyCompliance()}
      </div>
    </section>
  )
}


function renderIntro() {
  return (
    <section className="pb-8 pt-8 show fade bg-half-170" >
      <div className="container ">
        <h1 className="display-5 mt-4">ZenSpaceApp HIPAA Compliance.</h1>
        <p className="lead" style={{maxWidth: "760px"}}>
          The accompanying sections describe in detail how we maintain
          compliance with the Health Insurance Portability and Accountability Act (HIPAA) 
          Privacy, Security and Breach Notification Rules.
        </p>
      </div>
    </section>
  )
}

export default function HIPAA() {
  return (
    <>
      <header id="navbar" className="defaultscroll sticky">
        <Navbar home="" />
      </header>
      {renderIntro()}
      {renderPrivacyCompliance()}
      {renderSecurityCompliance()}
      {/* {renderBreachCompliance()}          */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}