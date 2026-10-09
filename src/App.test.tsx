import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'
afterEach(cleanup)
describe('Portfolio navigation and contact',()=>{
 it('connects every navigation item to an existing section',()=>{render(<App/>); const nav=screen.getByRole('navigation'); for(const link of nav.querySelectorAll('a[href^="#"]')){expect(document.querySelector(link.getAttribute('href')!)).not.toBeNull()}})
 it('opens the mobile menu and closes it after selection',()=>{render(<App/>);const menu=screen.getByRole('button',{name:'Menu'});fireEvent.click(menu);expect(menu).toHaveAttribute('aria-expanded','true');fireEvent.click(screen.getByRole('link',{name:'Projetos'}));expect(menu).toHaveAttribute('aria-expanded','false')})
 it('offers actual email contact for every featured project',()=>{render(<App/>);expect(screen.getAllByRole('article')).toHaveLength(3);for(const article of screen.getAllByRole('article')){expect(article.querySelector('a')).toHaveAttribute('href',expect.stringContaining('mailto:victor.hugofdantas@gmail.com?subject='))}})
})
