import React, { useState, useEffect } from 'react';
import { db } from '../../Api/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './Lists.css'

const List = () => {
    const [parcels, setParcels] = useState([]);

   
    useEffect(() => {
        const fetchParcels = async () => {
            try {
                const getParcel = query(collection(db, 'parcels'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(getParcel);
                const parcelsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log("fetched data: ", parcelsData);
                setParcels(parcelsData);
            } catch (error) {
                console.error("Error fetching parcels: ", error);
            }
        };

        fetchParcels();
    }, []);


    const categorizedParcels = parcels.reduce((acc, parcel) => {
        const department = parcel.department || "Uncategorized";
        if (!acc[department]) acc[department] = [];
        acc[department].push(parcel);
        return acc;
    }, {});
    console.log(categorizedParcels)

    return (
        <div className="parcel-list">
            <h2>Parcel Lists</h2>
            {Object.keys(categorizedParcels).map(department => (
                <div key={department} className="department-section">
                    <h3 className="department-header">{department} Department</h3>
                    <ul>
                        {categorizedParcels[department].map(parcel => (
                            <li key={parcel.id} className="parcel-item">
                                <strong>ID:</strong> {parcel.id} | <strong>Weight:</strong> {parcel.weight} kg | <strong>Value:</strong> €{parcel.value} | 
                                <br /> <strong>Receiver:</strong> {parcel.receiverName} | <strong>House Number:</strong> {parcel.houseNumber}
                                <br /> <strong>Street:</strong> {parcel.street} | <strong>Postalcode:</strong> {parcel.postalcode} | <strong>City:</strong> {parcel.city}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default List;
