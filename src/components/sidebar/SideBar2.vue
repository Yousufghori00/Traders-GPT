<template>
<div class="sidebar-2" :style="{ width: sidebarWidth }">
    <div class="SideBarStickMain">
        <img src="../../assets/Image/FaveiconBackgroundNone.png" alt="">
        <div class="hr"></div>
        <div class="Icons" :class="{ active: selectedIcon === 1 }" @click="selectedIcon = 1">
            <img src="../../assets/Image/msgIconWhite.png" alt="">
        </div>
        <div class="Icons" :class="{ active: selectedIcon === 0 }" @click="selectedIcon = 0">
            <img src="../../assets/Image/ChatIconWhite.png" alt="">
        </div>
         <div class="Icons" :class="{ active: selectedIcon === 2 }" @click="selectedIcon = 2">
            <img class="BigHardimg" src="../../assets/Image/HardBoardIcon.png" alt="">
        </div>
         <div class="Icons" :class="{ active: selectedIcon === 3 }" @click="selectedIcon = 3">
            <img src="../../assets/Image/GraphLineIconWhite.png" alt="">
        </div>
         <div class="SettingIconLogin">
            <img src="../../assets/Image/SettingBlackIcon.png" alt="">
            <img src="../../assets/Image/LogOutIcon.png" alt="">
        </div>
    </div>
    
    <div style="width: 308px;">
        <div class="LogoPlusConverSationMain">
            <div class="Dv_ConverSation">
                <div class="ConverSationMain">
                    <div class="ConverSation">
                        <img src="../../assets/Image/BoxIcon.png  " alt="">
                        <h1 class="bg-red-500 text-white p-4 text-center">Conversations (9)</h1>
                    </div>
                    <div class="PlusIcon">
                        <img src="../../assets/Image/PlusIcon.png" alt="">
                    </div>
                </div>
                <div class="TabBarMain">
                    <SelectButton v-model="value" :options="options" />
                    <div class="SearchDv">
                        <img src="../../assets/Image/SearchIcon.png" alt="">
                    </div>
                </div>
            </div>
            <!-- <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
            <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
            <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
            <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
            <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink> -->
        </div>
        <div class="MessagesDv_ContentMain">
            <router-link to="/dashboard" style="text-decoration: none; border-bottom: none;" >
                <div class="MessageDv" :class="{ active: selectedIndex === 0 }" @click="selectedIndex = 0">
                    <div class="Noc-GeneratingDvMain">
                        <div class="CompanyDv">
                            <figure>
                                <img src="../../assets/Image/Apple_Logo_Icon.png" alt="Company Logo" />
                            </figure>
                            <h1>11:16 AM</h1>
                        </div>
                        <div class="CompanyData_Entry">
                            <div class="CompanyName">
                                <div class="DocumentKey">
                                    <h2><span>#</span>GOOG</h2>
                                </div>
                                <div class="CountDv">
                                    <div class="Count">
                                        <h5>7</h5>
                                    </div>
                                    <h6>$121.65</h6>
                                </div>
                            </div>
                            <div class="GrphMain">
                                <h6>Generating...</h6>
                                  
                                <h5> <img src="../../assets/Image/UpIcon.png" alt="Trend Icon" /> 0.78% </h5>
                            </div>
                            <div class="Dv_Of_ActionIconMain">
                                <p>Will do, super, thank</p>
                                <img src="../../assets/Image/GraphMountain.png" alt="Graph" />
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import SelectButton from 'primevue/selectbutton';
// import SidebarLink from './SidebarLink'
import {
    collapsed,
    toggleSidebar,
    sidebarWidth
} from './state'
export default {
    components: {
        // SidebarLink,
        SelectButton
    },
    setup() {
        const checked = ref(false)
        return {
            collapsed,
            toggleSidebar,
            sidebarWidth,
            checked
        }
    }
}
</script>
<script setup>
const selectedIcon = ref(null)
const value = ref('All')
const options = ['All', 'Stocks', 'Crypto', 'ETFs']
const selectedIndex = ref(null)
</script>