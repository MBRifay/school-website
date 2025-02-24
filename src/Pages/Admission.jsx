import React from 'react';
import { useTranslation } from 'react-i18next';

const AdmissionPage = () => {
    const { t } = useTranslation();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 lg:text-[1rem] md:text-[3rem]">
            <h1 className="lg:text-[1.5rem] md:text-[4rem] font-semibold text-center mb-8">
                {t('Admission_header')}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="grade">{t('Grade_label')}</label>
                    <select
                        id="grade"
                        name="grade"
                        className="w-full"
                        required
                    >
                        <option value="">{t('Select_Grade')}</option>
                        <option value="Grade 1">Grade 1</option>
                        
                    </select>
                </div>
                <div>
                    <label htmlFor="student-name">{t('Student_Name_label')}</label>
                    <input
                        type="text"
                        id="student-name"
                        name="student-name"
                        placeholder={t('Student_Name_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob">{t('DOB_label')}</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label>{t('Sex_label')}</label>
                    <div>
                        <input type="radio" id="male" name="sex" value="Male" required />
                        <label htmlFor="male">{t('Male')}</label>

                        <input type="radio" id="female" name="sex" value="Female" />
                        <label htmlFor="female">{t('Female')}</label>

                        <input type="radio" id="others" name="sex" value="Others" />
                        <label htmlFor="others">{t('Others')}</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="nationality">{t('Nationality_label')}</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        placeholder={t('Nationality_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="religion">{t('Religion_label')}</label>
                    <input
                        type="text"
                        id="religion"
                        name="religion"
                        placeholder={t('Religion_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="caste">{t('Caste_label')}</label>
                    <input
                        type="text"
                        id="caste"
                        name="caste"
                        placeholder={t('Caste_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="community">{t('Community_label')}</label>
                    <select
                        id="community"
                        name="community"
                        className="w-full"
                        required
                    >
                        <option value="">{t('Select_Community')}</option>
                        <option value="OC">OC</option>
                        <option value="BC">BC</option>
                        <option value="MBC">MBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                    </select>
                </div>
                <h2>{t('Fathers_Details')}</h2>
                <div>
                    <label htmlFor="father-name">{t('Father_Name_label')}</label>
                    <input
                        type="text"
                        id="father-name"
                        name="father-name"
                        placeholder={t('Father_Name_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-qualification">{t('Father_Qualification_label')}</label>
                    <input
                        type="text"
                        id="father-qualification"
                        name="father-qualification"
                        placeholder={t('Father_Qualification_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-mobile">{t('Father_Mobile_label')}</label>
                    <input
                        type="tel"
                        id="father-mobile"
                        name="father-mobile"
                        placeholder={t('Father_Mobile_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-occupation">{t('Father_Occupation_label')}</label>
                    <input
                        type="text"
                        id="father-occupation"
                        name="father-occupation"
                        placeholder={t('Father_Occupation_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-income">{t('Father_Income_label')}</label>
                    <input
                        type="text"
                        id="father-income"
                        name="father-income"
                        placeholder={t('Father_Income_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <h2>{t('Mothers_Details')}</h2>
                <div>
                    <label htmlFor="mother-name">{t('Mother_Name_label')}</label>
                    <input
                        type="text"
                        id="mother-name"
                        name="mother-name"
                        placeholder={t('Mother_Name_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-qualification">{t('Mother_Qualification_label')}</label>
                    <input
                        type="text"
                        id="mother-qualification"
                        name="mother-qualification"
                        placeholder={t('Mother_Qualification_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-mobile">{t('Mother_Mobile_label')}</label>
                    <input
                        type="tel"
                        id="mother-mobile"
                        name="mother-mobile"
                        placeholder={t('Mother_Mobile_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-occupation">{t('Mother_Occupation_label')}</label>
                    <input
                        type="text"
                        id="mother-occupation"
                        name="mother-occupation"
                        placeholder={t('Mother_Occupation_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-income">{t('Mother_Income_label')}</label>
                    <input
                        type="text"
                        id="mother-income"
                        name="mother-income"
                        placeholder={t('Mother_Income_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="current-school">{t('Current_School_label')}</label>
                    <input
                        type="text"
                        id="current-school"
                        name="current-school"
                        placeholder={t('Current_School_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="board">{t('Board_label')}</label>
                    <select
                        id="board"
                        name="board"
                        className="w-full"
                        required
                    >
                        <option value="">{t('Select_Board')}</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email">{t('Email_label')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('Email_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">{t('Address_label')}</label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder={t('Address_placeholder')}
                        rows="4"
                        className="w-full"
                        required
                    ></textarea>
                </div>
                <div>
                    <label>{t('Siblings_label')}</label>
                    <div>
                        <input type="radio" id="siblings-yes" name="siblings" value="Yes" required />
                        <label htmlFor="siblings-yes">{t('Yes')}</label>

                        <input type="radio" id="siblings-no" name="siblings" value="No" />
                        <label htmlFor="siblings-no">{t('No')}</label>
                    </div>
                </div>
                <div>
                    <label>{t('Upload_Photo_label')}</label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/png, image/jpeg, application/pdf"
                        className="w-full"
                    />
                </div>
                <div>
                    <label>{t('Captcha_label')}</label>
                    <input
                        type="text"
                        id="captcha"
                        name="captcha"
                        placeholder={t('Captcha_placeholder')}
                        className="w-full"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {t('Submit')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionPage;
