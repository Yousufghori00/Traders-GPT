<template>
<div class="navbar">
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
                            <img src="../../assets/Image/UpIcon.png" alt="Trend Icon" />
                            0.78%
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="NavbarContentDvTwo">
            <div class="TabsBtn">
                <SelectButton v-model="value" :options="options" />
            </div>
            <div class="ProfileDvMain">
                <img src="../../assets/Image/profilePic copy.jpg" alt="">
                <img class="settingImg" src="../../assets/Image/setting.svg" alt="">
            </div>
        </div>

    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import SelectButton from 'primevue/selectbutton';
export default {
    components: {
        SelectButton
    },
    setup() {
        const checked = ref(false)
        return {
            checked
        }
    }
}
</script><script setup>
const value = ref('Analytics')
const options = ['Analytics', 'History']
</script>
