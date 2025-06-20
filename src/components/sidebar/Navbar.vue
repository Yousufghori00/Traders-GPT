<template>
<div class="navbar" id="FirstBackground_Navbar">
    <div class="NavbarContentDv">
        <div class="NavbarContentDvOne">
            <div class="CompanyDv">
                <figure>
                    <img src="../../assets/Image/Netfilx_Icon.png" alt="Company Logo" />
                </figure>
                <div>
                    <div class="CompanyName">
                        <div class="DocumentKey">
                            <h2><span>#</span>Netfilx</h2>
                            <div class="dot"></div>
                            <p>Netflix Inc</p>
                        </div>
                    </div>
                    <div class="flexDv">
                        <p>$121.65</p>
                        <h6>
                            <inline-svg src="/src/assets/Image/Svg/UpIcon.svg" />
                            0.78%
                        </h6>
                    </div>
                </div>
            </div>
            <div class="AleartsDv">
                <div class="Icon_Plus_ToggleDV">
                    <inline-svg src="/src/assets/Image/Svg/Pin_Icon.svg" />
                    <p>Pin</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="Icon_Plus_ToggleDV">
                    <inline-svg src="/src/assets/Image/Svg/Reload_Icon.svg" />
                    <p>Updates</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="Icon_Plus_ToggleDV">
                    <inline-svg src="/src/assets/Image/Svg/Pin_Icon.svg" />
                    <p>Alerts</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <inline-svg style="width: 20px; height: 20px;" class="settingImg" src="/src/assets/Image/Svg/SettingMainIcon.svg" />
            </div>
        </div>
        <div class="NavbarContentDvTwo">
            <div class="TabsBtn">
                <SelectButton v-model="value" :options="options" />
            </div>
            <div class="ProfileDvMain">
                <img src="../../assets/Image/profilePic copy.jpg" alt="">
                <inline-svg class="settingImg" src="/src/assets/Image/Svg/SettingMainIcon.svg" />
            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import SelectButton from 'primevue/selectbutton';
export default {
    components: {
        SelectButton,
    },
    setup() {
        const checked = ref(false)
        return {
            checked
        }
    }
}
</script><script setup>
const checked = ref(false);
const value = ref('Analytics')
const options = ['Analytics', 'History']
</script>
