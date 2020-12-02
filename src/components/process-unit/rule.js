const rule = {
  methods: {
    _statusClass(fluency) {
      if (fluency >= 98) {
        return { success: true }
      } else if (fluency > 0) {
        return { error: true }
      }
    }
  }
}
export default rule
