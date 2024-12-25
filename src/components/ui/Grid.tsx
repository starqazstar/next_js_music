interface GridProps {
  children: React.ReactNode
  columns?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: number
}

export function Grid({ 
  children, 
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 4
}: GridProps) {
  const getGridCols = () => {
    return `grid-cols-${columns.default} ${
      columns.sm ? `sm:grid-cols-${columns.sm}` : ''
    } ${
      columns.md ? `md:grid-cols-${columns.md}` : ''
    } ${
      columns.lg ? `lg:grid-cols-${columns.lg}` : ''
    } ${
      columns.xl ? `xl:grid-cols-${columns.xl}` : ''
    }`
  }

  return (
    <div className={`grid ${getGridCols()} gap-${gap}`}>
      {children}
    </div>
  )
}
