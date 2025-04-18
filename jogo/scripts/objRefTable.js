const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Behaviors.scrollto,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.ResetEventVar
	];
};
self.C3_JsPropNameTable = [
	{Mouse: 0},
	{Teclado: 0},
	{Fixar: 0},
	{RestritoAoLayout: 0},
	{Personagem: 0},
	{Cenario1: 0},
	{Cenario2: 0},
	{Cenario3: 0},
	{Sólido: 0},
	{Chao1: 0},
	{ação: 0},
	{Plataforma: 0},
	{inimigo1: 0},
	{vida: 0},
	{açao: 0},
	{PorcoChefe: 0},
	{hitbox: 0},
	{marcador: 0},
	{Pfase2: 0},
	{Chao2: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Titulo: 0},
	{StartButton: 0},
	{HistoryButton: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{TextoHistoria: 0},
	{LeftArrow: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{GameOverPNG: 0},
	{PlayAgain: 0},
	{YES: 0},
	{NO: 0},
	{FundoObrigado: 0},
	{Obrigado: 0},
	{PNGpersonagem: 0},
	{Âncora: 0},
	{Sprite: 0},
	{Vida1: 0},
	{CentrarEm: 0},
	{colisao: 0},
	{barravida2: 0},
	{barravida1: 0},
	{elixir: 0},
	{porta: 0},
	{portahb: 0},
	{colsion: 0},
	{Áudio: 0},
	{Texto: 0},
	{vida1: 0}
];

self.InstanceType = {
	Mouse: class extends self.IInstance {},
	Teclado: class extends self.IInstance {},
	Personagem: class extends self.ISpriteInstance {},
	Cenario1: class extends self.ISpriteInstance {},
	Cenario2: class extends self.ISpriteInstance {},
	Cenario3: class extends self.ISpriteInstance {},
	Chao1: class extends self.ISpriteInstance {},
	inimigo1: class extends self.ISpriteInstance {},
	PorcoChefe: class extends self.ISpriteInstance {},
	hitbox: class extends self.ISpriteInstance {},
	marcador: class extends self.ISpriteInstance {},
	Pfase2: class extends self.ISpriteInstance {},
	Chao2: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Titulo: class extends self.ISpriteInstance {},
	StartButton: class extends self.ISpriteInstance {},
	HistoryButton: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	TextoHistoria: class extends self.ISpriteFontInstance {},
	LeftArrow: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	GameOverPNG: class extends self.ISpriteInstance {},
	PlayAgain: class extends self.ISpriteFontInstance {},
	YES: class extends self.ISpriteFontInstance {},
	NO: class extends self.ISpriteFontInstance {},
	FundoObrigado: class extends self.ISpriteInstance {},
	Obrigado: class extends self.ISpriteFontInstance {},
	PNGpersonagem: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Vida1: class extends self.ISpriteInstance {},
	vida: class extends self.ITextInstance {},
	colisao: class extends self.ISpriteInstance {},
	barravida2: class extends self.ISpriteInstance {},
	barravida1: class extends self.ISpriteInstance {},
	elixir: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	portahb: class extends self.ISpriteInstance {},
	colsion: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Texto: class extends self.ITextInstance {}
}