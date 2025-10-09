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
        alert('Already Installed.');
    } else {
        storeAppsData.push(id);
        const data = JSON.stringify(storeAppsData);
        localStorage.setItem("installed", data);
        alert('App Installed Successfully!');
    }
};

export { addStored, getStoredApps };
