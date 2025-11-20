import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';
import "./profile.scss"

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const [userData, setUserData] = useState({
        fullName: 'Alisher Karimov',
        email: 'alisher.karimov@example.com',
        phone: '+998 90 123 45 67',
        address: 'Toshkent sh., Chilonzor tumani',
        dateOfBirth: '15.03.1995',
        gender: 'Erkak',
        registeredDate: '15 Yanvar 2024'
    });

    const [tempData, setTempData] = useState({ ...userData });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setTempData({ ...userData });
    };

    const handleSave = () => {
        setUserData({ ...tempData });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempData({ ...userData });
        setIsEditing(false);
    };

    const handleChange = (field, value) => {
        setTempData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="profile container">
            <div className='profile__header'>
                <h2 className='profile__header-title'>User Profile</h2>
                <div>
                    {!isEditing ? (
                        <button className="profile__header-btnEdit" onClick={handleEdit}>
                            <Edit2 size={18} />
                            Edit
                        </button>
                    ) : (
                        <div className="profile__header-actionButtons">
                            <button className="profile__header-btnSave" onClick={handleSave}>
                                <Save size={18} />
                                Save
                            </button>
                            <button className="profile__header-btnCancel" onClick={handleCancel}>
                                <X size={18} />
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="profile-box">
                <div className="profile-box-imageSection">
                    <div className="profile-box-imageWrapper">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className="profile-box-profileImage" />
                        ) : (
                            <div className="profile-box-avatarPlaceholder">
                                <User size={60} color="#667eea" />
                            </div>
                        )}
                    </div>
                    {isEditing && (
                        <div className="profile-box-uploadSection">
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="profile-box-fileInput"
                            />
                            <label htmlFor="imageUpload" className="profile-box-uploadButton">
                                📷 Upload a picture
                            </label>
                        </div>
                    )}
                </div>

                <div className="profile-box-infoSection">
                    <h3 className="profile-box-infoSection-sectionTitle">Personal Information</h3>

                    <div className="profile-box-infoSection-infoGrid">
                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                <User size={18} className="profile-box-infoSection-icon" />
                                Full name
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={tempData.fullName}
                                    onChange={(e) => handleChange('fullName', e.target.value)}
                                    className="profile-box-infoSection-input"
                                />
                            ) : (
                                <div className="profile-box-infoSection-value">{userData.fullName}</div>
                            )}
                        </div>

                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                <Mail size={18} className="profile-box-infoSection-icon" />
                                Email
                            </label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    value={tempData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="profile-box-infoSection-input"
                                />
                            ) : (
                                <div className="profile-box-infoSection-value">{userData.email}</div>
                            )}
                        </div>

                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                <Phone size={18} className="profile-box-infoSection-icon" />
                                Phone Number
                            </label>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    value={tempData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className="profile-box-infoSection-input"
                                />
                            ) : (
                                <div className="profile-box-infoSection-value">{userData.phone}</div>
                            )}
                        </div>

                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                <MapPin size={18} className="profile-box-infoSection-icon" />
                                Address
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={tempData.address}
                                    onChange={(e) => handleChange('address', e.target.value)}
                                    className='profile-box-infoSection-input'
                                />
                            ) : (
                                <div className="profile-box-infoSection-value">{userData.address}</div>
                            )}
                        </div>

                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                <Calendar size={18} className="profile-box-infoSection-icon" />
                                Date of birth
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={tempData.dateOfBirth}
                                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                                    className="profile-box-infoSection-input"
                                    placeholder="DD.MM.YYYY"
                                />
                            ) : (
                                <div className="profile-box-infoSection-value">{userData.dateOfBirth}</div>
                            )}
                        </div>

                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                👤 Gender
                            </label>
                            {isEditing ? (
                                <select
                                    value={tempData.gender}
                                    onChange={(e) => handleChange('gender', e.target.value)}
                                    className="profile-box-infoSection-input"
                                >
                                    <option value="Erkak">Male</option>
                                    <option value="Ayol">Female</option>
                                </select>
                            ) : (
                                <div className="profile-box-infoSection-value">{userData.gender}</div>
                            )}
                        </div>

                        <div className="profile-box-infoSection-infoItem">
                            <label className="profile-box-infoSection-label">
                                📅 Registered Date
                            </label>
                            <div className="profile-box-infoSection-value">{userData.registeredDate}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}