export const generateTitleWithProgress = (checklist, name) => {
  if (checklist) {
    let progress = 0
    let icon = "🛠"
    let totalListItems = Object.keys(checklist).length
    let completedItems = 0
    for (let i in checklist) {
      if (checklist[i] === true) {
        completedItems++
      }
    }
    progress = Math.round((completedItems / totalListItems) * 100)
    if (progress == 100) {
      icon = "✅"
    }
    return icon + " (" + progress + "%) - " + name
  } else {
    return name
  }
}
