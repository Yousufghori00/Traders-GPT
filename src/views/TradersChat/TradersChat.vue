<template>
<div class="DashBoradMainContent_DV">
    <div class="DashBoardOneMain" :style="{ width: dashoardTwoWidth }">
        <div class="CampanyLogo">
            <div class="CampanyTextMain">
                <img src="../../assets/Image/McDonald_Logo.png" alt="">
                <div class="CampanyText">
                    <h1>Alphabet Inc <span>- GOOG</span></h1>
                    <h2>173.19 <span>+0.45%</span></h2>
                </div>
            </div>
            <div class="Select">
                <p>Model:</p>
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="ChatGPT 4o"  />
            </div>
        </div>
        <div class="MiddleContentDv">
            <img src="../../assets/Image/FaveiconBackgroundNone.png" alt="">
            <p>Welcome To TRADERSGPT</p>
            <h4> Discover anything about the markets, by just asking the <br /> intelligent Agent</h4>
            <div class="QuestionBoxMain">
                <div class="Box">
                    <div class="Flash">
                        <inline-svg src="/src/assets/Image/Svg/FlashIcon.svg" />
                    </div>
                    <p>How has market been performing this month ?</p>
                </div>
                <div class="Box">
                    <div class="Flash">
                        <inline-svg src="/src/assets/Image/Svg/FlashIcon.svg" />
                    </div>
                    <p>How do you market moving next ?</p>
                </div>
                <div class="Box">
                    <div class="Flash">
                        <inline-svg src="/src/assets/Image/Svg/FlashIcon.svg" />
                    </div>
                    <p>Analyze he market with consumer purchase </p>
                </div>
            </div>
        </div>
        <div class="TrendingOption">
            <div class="OptionsMain">
                <div class="optionHead">
                    <div class="trendText">
                        <inline-svg  src="/src/assets/Image/Svg/FlashIcon.svg" />
                        <p>Trending Q’s</p>
                    </div>
                    <div class="TrendIcon">
                        <div class="IconBox">
                            <inline-svg  src="/src/assets/Image/Svg/likeIcon.svg" />
                        </div>
                        <div class="IconBox">
                            <inline-svg  src="/src/assets/Image/Svg/DislikeIcon.svg" />
                        </div>
                        <div class="IconBox">
                            <inline-svg class="Reload" src="/src/assets/Image/Svg/Reload_Icon.svg" />
                        </div>
                        <div class="IconBox">
                            <inline-svg  src="/src/assets/Image/Svg/copyIcon.svg" />
                        </div>
                    </div>
                </div>
                <div class="TrendSuggested">
                    <div class="Suggest"> 
                        <p>how is google performing this quarter comp... </p>
                    </div>
                     <div class="Suggest">
                        <p>Is google a good long term investment ?</p>
                    </div>
                     <div class="Suggest">
                        <p>What are key metrics ?</p>
                    </div>
                     <div class="Suggest">
                        <p>What are key metrics ?</p>
                    </div>

                </div>
            </div>
            <div class="ChatBoxMain">
                <div class="ChatBoxUnder">
                    <div class="ChatBoxUnderMainDv">
                        <div class="AskSomething">
                            <div class="BoxIcon">
                                <inline-svg src="/src/assets/Image/Svg/FlashIcon.svg" />
                            </div>
                            <input type="text" placeholder="Ask anything about the markets ...">
                        </div>
                        <div>
                            <div class="plan">
                                <p>Free Plan : <span>Upgrade</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="ChatComitmentMain">
                        <div class="WebMode">
                            <div class="Web">
                                <inline-svg src="/src/assets/Image/Svg/WorldWebIcon.svg" />
                                <p>Web Mode</p>
                                <div class="circle"></div>
                            </div>
                            <div class="Web">
                                <inline-svg class="MicroImg" src="/src/assets/Image/Svg/MicroScopeIcon.svg" />
                                <p>Deep Mode</p>
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div class="IconsForCommit">
                            <div class="Attachement">
                                <inline-svg src="/src/assets/Image/Svg/attachment.svg" />
                            </div>
                            <div class="Attachement">
                                <inline-svg src="/src/assets/Image/Svg/microphone.svg" />
                            </div>
                            <div class="Attachement BlueAttachemnet">
                                <inline-svg src="/src/assets/Image/Svg/sent-fast.svg" />
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <div class="DashBoardTwoMain"  v-if="!collapsed" :style="{ width: dashoardWidth }">
        <SideBarComponents />
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import {
    toggleDashBoardbar,
    dashoardWidth,
    dashoardTwoWidth
} from '../../state.js'
import SelectButton from 'primevue/selectbutton';
import Select from 'primevue/select';
import SideBarComponents from '../../components/SideBarComponent.vue';

export default {
    components: {
        SelectButton,
        Select,
        SideBarComponents
    },
    setup() {
        const checked = ref(false)
        return {
            checked,
            toggleDashBoardbar,
            dashoardWidth,
            dashoardTwoWidth
        }
    }
}
</script><script setup>
const value = ref('Overview')
const options = ['Overview', 'Company', 'Financial', 'Earnings', 'Analysis']
const selectedCity = ref();
const cities = ref([
    { name: 'ChatGPT 4.1' },
    { name: 'ChatGPT 4.2' },
    { name: 'ChatGPT 4.2 Pro' },
]);
</script>

<style scoped>
@import url('./tradersChat.scss');
</style>
 