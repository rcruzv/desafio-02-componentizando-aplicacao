import '../styles/sidebar.scss';
import { Button } from './Button';
import { GenreProps } from '../interface/props';

interface SideBarProps{
  genres: GenreProps[],
  id: number
  click: Function
}

export function SideBar(props: SideBarProps) {

  const { genres, id, click } = props
  
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => click(genre.id)}
              selected={id === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}