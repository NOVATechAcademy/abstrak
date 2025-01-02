import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import HeaderFour from '../common/header/HeaderFour';

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Application has been successfully submitted.
    </Alert>
  );
};

const Apply = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    gender: '',
    isUSCitizen: '',
    authorizedToWork: '',
    email: '',
    phone: '',
    paymentPlan: '',
    educationLevel: '',
    codingExperience: '',
    employmentStatus: '',
  });
  const [errors, setErrors] = useState({});
  const [result, showResult] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateFields = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName || formData.firstName.length > 50) {
        newErrors.firstName = 'Please enter a valid first name (max 50 characters).';
      }
      if (!formData.lastName || formData.lastName.length > 50) {
        newErrors.lastName = 'Please enter a valid last name (max 50 characters).';
      }
      if (formData.middleName && formData.middleName.length > 50) {
        newErrors.middleName = 'Middle name cannot exceed 50 characters.';
      }
      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Please enter your date of birth in mm/dd/yyyy format.';
      }
      if (!formData.gender || formData.gender.length > 50) {
        newErrors.gender = 'Please enter your gender or write NA if you wish not to disclose (max 50 characters).';
      }
      if (!formData.isUSCitizen) {
        newErrors.isUSCitizen = 'Please select if you are a US citizen.';
      }
      if (formData.isUSCitizen === 'No' && !formData.authorizedToWork) {
        newErrors.authorizedToWork = 'Please specify if you are authorized to work without sponsorship.';
      }
    }

    if (step === 2) {
      if (!formData.paymentPlan) {
        newErrors.paymentPlan = 'Please select a payment plan.';
      }
    }

    if (step === 3) {
      if (!formData.educationLevel) {
        newErrors.educationLevel = 'Please select your highest level of education.';
      }
      if (!formData.codingExperience) {
        newErrors.codingExperience = 'Please select your level of experience in coding.';
      }
      if (!formData.employmentStatus) {
        newErrors.employmentStatus = 'Please select your employment status.';
      }
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateFields()) {
      setStep(step + 1);
    }
  };

  const previousStep = () => setStep(step - 1);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('NOVA Tech Academy Application', 20, 20);

    doc.setFontSize(12);
    Object.keys(formData).forEach((key, index) => {
      const value = formData[key];
      doc.text(`${key}: ${value || 'N/A'}`, 20, 40 + index * 10);
    });

    return doc;
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Application');
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'base64' });

    return excelFile;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    try {
      // Generate PDF and Excel
      const pdf = generatePDF();
      const pdfBase64 = pdf.output('datauristring').split(',')[1];
      const excelBase64 = generateExcel();

      // Admin Email
      await emailjs.send(
        'novaleadingtech', // Replace with your service ID
        'template_lr0v7id', // Replace with your admin email template ID
        {
          pdf_file: `data:application/pdf;base64,${pdfBase64}`,
          excel_file: `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${excelBase64}`,
          file_name_pdf: 'application.pdf',
          file_name_excel: 'application.xlsx',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        },
        'jnkxiSDK6lXbN2X26' // Replace with your public key
      );

      // User Auto-Reply Email
      await emailjs.send(
        'novaleadingtech', // Replace with your service ID
        'template_zimvlsr', // Replace with your auto-reply email template ID
        {
          firstName: formData.firstName,
          email: formData.email,
        },
        'jnkxiSDK6lXbN2X26' // Replace with your public key
      );

      showResult(true);
      setShowModal(true);
    } catch (error) {
      console.error('Failed to send emails:', error);
      setErrors({ form: 'There was an error submitting your application.' });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    showResult(false);
    navigate('/');
  };

  return (
    <>
      <SEO title="Corporate Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderFour />
        <BreadCrumbOne 
          title="Apply to NOVA Tech Academy"
          page="Apply"
        />
        <div className="apply-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <form onSubmit={handleSubmit} className="apply-form">
                  {step === 1 && (
                    <div>
                      <h2 className="form-subtitle">About You</h2>
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.firstName && <p className="form-error text-danger">{errors.firstName}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.lastName && <p className="form-error text-danger">{errors.lastName}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="middleName">Middle Name</label>
                        <input
                          type="text"
                          id="middleName"
                          name="middleName"
                          value={formData.middleName}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.middleName && <p className="form-error text-danger">{errors.middleName}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.dateOfBirth && <p className="form-error text-danger">{errors.dateOfBirth}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className="form-error text-danger">{errors.gender}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="isUSCitizen">Are you a US Citizen?</label>
                        <select
                          id="isUSCitizen"
                          name="isUSCitizen"
                          value={formData.isUSCitizen}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        {errors.isUSCitizen && <p className="form-error text-danger">{errors.isUSCitizen}</p>}
                      </div>
                      {formData.isUSCitizen === 'no' && (
                        <div className="form-group">
                          <label htmlFor="authorizedToWork">Authorized to Work in the US?</label>
                          <select
                            id="authorizedToWork"
                            name="authorizedToWork"
                            value={formData.authorizedToWork}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                          {errors.authorizedToWork && <p className="form-error text-danger">{errors.authorizedToWork}</p>}
                        </div>
                      )}
                      <div className="form-buttons">
                        <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="form-subtitle">Program Options</h2>
                      <div className="form-group">
                        <label htmlFor="paymentPlan">Payment Plan</label>
                        <select
                          id="paymentPlan"
                          name="paymentPlan"
                          value={formData.paymentPlan}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select Payment Plan</option>
                          <option value="monthly">Monthly</option>
                          <option value="installments">Installments</option>
                        </select>
                        {errors.paymentPlan && <p className="form-error text-danger">{errors.paymentPlan}</p>}
                      </div>
                      <div className="form-buttons d-flex justify-content-between">
                        <button type="button" onClick={previousStep} className="btn btn-secondary">Previous</button>
                        <button type="button" onClick={nextStep} className="btn btn-primary">Next</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="form-subtitle">Background</h2>
                      <div className="form-group">
                        <label htmlFor="educationLevel">Education Level</label>
                        <select
                          id="educationLevel"
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select Education Level</option>
                          <option value="highschool">High School</option>
                          <option value="bachelor">Bachelor's</option>
                          <option value="master">Master's</option>
                          <option value="phd">PhD</option>
                        </select>
                        {errors.educationLevel && <p className="form-error text-danger">{errors.educationLevel}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="codingExperience">Coding Experience</label>
                        <select
                          id="codingExperience"
                          name="codingExperience"
                          value={formData.codingExperience}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select Coding Experience</option>
                          <option value="none">None</option>
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                        {errors.codingExperience && <p className="form-error text-danger">{errors.codingExperience}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.email && <p className="form-error text-danger">{errors.email}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.phone && <p className="form-error text-danger">{errors.phone}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="employmentStatus">Employment Status</label>
                        <select
                          id="employmentStatus"
                          name="employmentStatus"
                          value={formData.employmentStatus}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="">Select Employment Status</option>
                          <option value="employed">Employed</option>
                          <option value="unemployed">Unemployed</option>
                          <option value="student">Student</option>
                        </select>
                        {errors.employmentStatus && <p className="form-error text-danger">{errors.employmentStatus}</p>}
                      </div>
                      <div className="form-buttons d-flex justify-content-between">
                        <button type="button" onClick={previousStep} className="btn btn-secondary">Previous</button>
                        <button type="submit" className="btn btn-primary">Submit Application</button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Application Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Result />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}>
              Go To Home Page
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default Apply;