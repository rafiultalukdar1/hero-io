import { toast } from "react-toastify";

const getStoredApps = () => {
    const storeAppsSTR = localStorage.getItem("installed");
    if (storeAppsSTR) {
        const storeAppsData = JSON.parse(storeAppsSTR);
        return storeAppsData;
    } else {
        return [];
    }
};

const addStored = (id) => {
    const storeAppsData = getStoredApps();
    if (storeAppsData.includes(id)) {
        toast.error('Already Installed.');
    } else {
        storeAppsData.push(id);
        const data = JSON.stringify(storeAppsData);
        localStorage.setItem("installed", data);
        toast.success('App Installed Successfully!');
    }
};

export { addStored, getStoredApps };
