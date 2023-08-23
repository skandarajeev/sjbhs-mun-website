
import { useState } from "react"
import style from "./tab.css"
import { motion, AnimatePresence } from "framer-motion"
const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
  ]
  
  const [tomato, lettuce, cheese] = allIngredients
  const tabs = [tomato, lettuce, cheese]
  
  
  
  function getNextIngredient(ingredients) {
    const existing = new Set(ingredients)
    return allIngredients.find(ingredient => !existing.has(ingredient))
  }
  
export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="window">
      <nav>
        <ul>
          {tabs.map(item => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence >
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
