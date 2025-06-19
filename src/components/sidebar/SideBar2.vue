<template>
<div class="sidebar-2" >
    <div class="SideBarStickMain">
        <img src="../../assets/Image/FaveiconBackgroundNone.png" alt="">
        <div class="hr"></div>
        <div class="Icons" :class="{ active: selectedIcon === 1 }" @click="selectedIcon = 1">
             <inline-svg src="/src/assets/Image/Svg/msgIconWhite.svg" />
        </div>
        <div class="Icons" :class="{ active: selectedIcon === 0 }" @click="selectedIcon = 0">
            <inline-svg src="/src/assets/Image/Svg/ChatIconWhite.svg" />
        </div>
         <div class="Icons" :class="{ active: selectedIcon === 2 }" @click="selectedIcon = 2">
            <inline-svg src="/src/assets/Image/Svg/HardBoardIcon.svg" />
        </div>
         <div class="Icons" :class="{ active: selectedIcon === 3 }" @click="selectedIcon = 3">
             <inline-svg src="/src/assets/Image/Svg/GraphLineIconWhite.svg" />
        </div>
         <div class="SettingIconLogin">
            <inline-svg src="/src/assets/Image/Svg/SettingBlackIcon.svg" />
            <inline-svg src="/src/assets/Image/Svg/LogOutIcon.svg" />
        </div>
    </div>
    
    <div style="width: 308px;">
        <div class="LogoPlusConverSationMain">
            <div class="Dv_ConverSation">
                <div class="ConverSationMain">
                    <div class="ConverSation">
                        <inline-svg src="/src/assets/Image/Svg/BoxIcon.svg" />
                        <h1 class="bg-red-500 text-white p-4 text-center">Conversations (9)</h1>
                    </div>
                    <div class="PlusIcon">
                        <inline-svg src="/src/assets/Image/Svg/PlusIcon.svg" />
                    </div>
                </div>
                <div class="TabBarMain">
                    <SelectButton v-model="value" :options="options" />
                    <div class="SearchDv">
                        <inline-svg src="/src/assets/Image/Svg/SearchIcon.svg" />
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
                                  
                                <h5><inline-svg src="/src/assets/Image/Svg/UpIcon.svg" /> 0.78% </h5>
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