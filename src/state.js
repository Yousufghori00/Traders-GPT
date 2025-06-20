import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleDashBoardbar = () => (collapsed.value = !collapsed.value)
export const DASHBOARDBAR_WIDTH = 30
export const DASHBOARDTWOBAR_WIDTH = 70
export const DASHBOARFBAR_WIDTH_COLLAPSED = 0
export const DASHBOARFTwoBAR_WIDTH_COLLAPSED = 100

export const dashoardWidth = computed(() =>
  `${collapsed.value ? DASHBOARFBAR_WIDTH_COLLAPSED : DASHBOARDBAR_WIDTH}%`
)
export const dashoardTwoWidth = computed(() =>
  `${collapsed.value ? DASHBOARFTwoBAR_WIDTH_COLLAPSED : DASHBOARDTWOBAR_WIDTH}%`
)


export const collapse = ref(false)
export const toggleSidebar = () => (collapse.value = !collapse.value)
export const SIDEBAR_WIDTH = 380
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed( () => `${collapse.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`)
