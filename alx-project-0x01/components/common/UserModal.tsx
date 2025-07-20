import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value}));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className ="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-10 shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Add New User
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <label htmlFor="id" className="block text-gray-700 font-mdeium mb-2">
                                Id
                            </label>
                            <input
                                type="number"
                                id="id"
                                name="id"
                                value={user.id}
                                onChange={hanldeChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="name" className="block text-gray-700 font-mdeium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name}
                                    onChange={hanldeChange}                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label htmlFor="username" className="block text-gray-700 font-mdeium mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={user.username}
                                    onChange={hanldeChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="email" className="block text-gray-700 font-mdeium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={hanldeChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Address</label>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="street"
                                value={user.address.street}
                                onChange={e => setUser({ ...user, address: { ...user.address, street: e.target.value } })}
                                placeholder="Street"
                                className="px-4 py-2 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                name="suite"
                                value={user.address.suite}
                                onChange={e => setUser({ ...user, address: { ...user.address, suite: e.target.value } })}
                                placeholder="Suite"
                                className="px-4 py-2 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                name="city"
                                value={user.address.city}
                                onChange={e => setUser({ ...user, address: { ...user.address, city: e.target.value } })}
                                placeholder="City"
                                className="px-4 py-2 border rounded-lg w-full"
                            />
                                <input
                                type="text"
                                name="zipcode"
                                value={user.address.zipcode}
                                onChange={e => setUser({ ...user, address: { ...user.address, zipcode: e.target.value } })}
                                placeholder="Zipcode"
                                className="px-4 py-2 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                name="lat"
                                value={user.address.geo.lat}
                                onChange={e => setUser({ ...user, address: { ...user.address, geo: { ...user.address.geo, lat: e.target.value } } })}
                                placeholder="Latitude"
                                className="px-4 py-2 border rounded-lg w-full"
                            />
                            <input
                                type="text"
                                name="lng"
                                value={user.address.geo.lng}
                                onChange={e => setUser({ ...user, address: { ...user.address, geo: { ...user.address.geo, lng: e.target.value } } })}
                                placeholder="Longitude"
                                className="px-4 py-2 border rounded-lg w-full"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label htmlFor="phone" className="block text-gray-700 font-mdeium mb-2">
                                Phone
                                </label>
                                <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={user.phone}
                                onChange={hanldeChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>
                            <div className="col-span-1">
                                <label htmlFor="website" className="block text-gray-700 font-mdeium mb-2">
                                    Website
                                </label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={user.website}
                                    onChange={hanldeChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Company</label>
                        <div className="grid grid-cols-2 gap-4">
                                    <input
                                    type="text"
                                    name="companyName"
                                    value={user.company.name}
                                    onChange={e => setUser({ ...user, company: { ...user.company, name: e.target.value } })}
                                    placeholder="Name"
                                    className="px-4 py-2 border rounded-lg w-full"
                                    />
                                    <input
                                    type="text"
                                    name="catchPhrase"
                                    value={user.company.catchPhrase}
                                    onChange={e => setUser({ ...user, company: { ...user.company, catchPhrase: e.target.value } })}
                                    placeholder="Catch Phrase"
                                    className="px-4 py-2 border rounded-lg w-full"
                                    />
                                    <input
                                    type="text"
                                    name="bs"
                                    value={user.company.bs}
                                    onChange={e => setUser({ ...user, company: { ...user.company, bs: e.target.value } })}
                                    placeholder="BS"
                                    className="px-4 py-2 border rounded-lg w-full"
                                    />
                        </div>
                    </div>
                        <div className="flex justify-between items-center">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Add User   
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;