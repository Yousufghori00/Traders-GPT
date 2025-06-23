import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const windowWidth = ref(window.innerWidth)

export const SIDEBAR_WIDTH = 380
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const SIDEBAR_WIDTH_LARGE_SCREEN = 550
export const SIDEBAR_WIDTH_MEDIUM_SCREEN = 500
export const SIDEBAR_WIDTH_SMALL_SCREEN = 350
export const SIDEBAR_WIDTH_XS_SMALL_SCREEN = 300
export const SIDEBAR_WIDTH_XXS_SMALL_SCREEN = 250
export const SIDEBAR_WIDTH_XXXXS_SMALL_SCREEN = 200


export const toggleSidebar = () => (collapsed.value = !collapsed.value)
export const sidebarWidth = computed(() => {
  if (collapsed.value) return `${SIDEBAR_WIDTH_COLLAPSED}px`;

  if (windowWidth.value >= 2500) return `${SIDEBAR_WIDTH_LARGE_SCREEN}px`;

  if (windowWidth.value >= 2400 && windowWidth.value < 2500)
    return `${SIDEBAR_WIDTH_MEDIUM_SCREEN}px`;

  if (windowWidth.value >= 1745 && windowWidth.value <= 1910)
    return `${SIDEBAR_WIDTH_SMALL_SCREEN}px`;

  if (windowWidth.value >= 1536 && windowWidth.value < 1745)
    return `${SIDEBAR_WIDTH_XS_SMALL_SCREEN}px`;
  
  if (windowWidth.value >= 1280 && windowWidth.value < 1536)
    return `${SIDEBAR_WIDTH_XXS_SMALL_SCREEN}px`;

  if (windowWidth.value >= 1024 && windowWidth.value < 1280)
    return `${SIDEBAR_WIDTH_XXXXS_SMALL_SCREEN}px`;

  return `${SIDEBAR_WIDTH}px`; // fallback for 1024–1535 or others
});


if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
}
