import { getTabIconName } from '../tab-navigator';

describe('getTabIconName', () => {
  it('maps the five tabs to a single consistent Feather outline set', () => {
    expect(getTabIconName('Chats')).toBe('message-circle');
    expect(getTabIconName('Channels')).toBe('hash');
    expect(getTabIconName('Threads')).toBe('at-sign');
    expect(getTabIconName('Buzz')).toBe('phone');
    expect(getTabIconName('Settings')).toBe('settings');
  });

  it('falls back to settings for unknown routes without adding tabs', () => {
    expect(getTabIconName('Unknown')).toBe('settings');
  });
});
