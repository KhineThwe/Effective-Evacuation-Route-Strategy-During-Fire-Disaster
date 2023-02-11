TheeGoneHighway_to_NanDawGone = {
    # 15min
    'TheeGoneHighway': [('MahaKyawStreet', 6.4,900)],
    # 1min,1min
    'MahaKyawStreet': [('MaKyeeGoneStreet', 0.0801136,60),('MaKyeeGoneBoneKgiKyaungStreet', 0.1,60)],
    # 1min
    'MaKyeeGoneBoneKgiKyaungStreet': [('NanDawGone', 0.3,60)],
    # 1min,2min
    'MaKyeeGoneStreet': [('NanDawGone', 0.2,60),('MaKyeeGoneKyaungStreet',0.2,120)],
    # 1min
    'MaKyeeGoneKyaungStreet': [('NanDawGone', 0.1,60)],
} 

AungSanFire_to_NanDawGone = {
    # 6min
    'AungSanFire': [('MahaKyawStreet', 1.8,360)],
     # 1min,1min
    'MahaKyawStreet': [('MaKyeeGoneStreet', 0.0801136,60),('MaKyeeGoneBoneKgiKyaungStreet', 0.1,60)],
    # 1min
    'MaKyeeGoneBoneKgiKyaungStreet': [('NanDawGone', 0.3,60)],
    # 1min,2min
    'MaKyeeGoneStreet': [('NanDawGone', 0.2,60),('MaKyeeGoneKyaungStreet',0.2,120)],
    # 1min
    'MaKyeeGoneKyaungStreet': [('NanDawGone', 0.1,60)],
} 

EastOfMarket_to_NanDawGone = {
    # 2min,2min
    'EastOfMarket': [('YangonMandalayRoad', 0.2,120), ('MyoShweKyaungStreet', 0.3,120)],
    # 3min
    'YangonMandalayRoad': [('MeiktilaKyaukpadaungRoad', 0.5,180)],
    'MyoShweKyaungStreet': [],
    # 2min,2min,2min
    'MeiktilaKyaukpadaungRoad': [('YoneGyiStreet', 0.1,120), ('YoneStreet1', 0.5,120), ('HninSiStreet', 0.2,120)],
    # 1min,6min,1min,1min
    'HninSiStreet': [('YoneStreet', 0.1,60), ('ThukhaHtilaStreet', 1.4,360), ('KhwarNyoStreet', 0.1,60), ('TharyarKoneStreet',0.4 ,60)],
    'YoneStreet': [],
    'ThukhaHtilaStreet': [],
    'KhwarNyoStreet': [],
    # 1min,1min,1min
    'TharyarKoneStreet': [('ManiZawKayoneStreet', 0.3,60), ('BandulaStreet', 0.2,60), ('YwarTitGoneStreet', 0.2,60)],
    # 2min
    'ManiZawKayoneStreet': [('MaKyeeGoneKyaungStreet', 0.3,120)],
    # 2min
    'BandulaStreet': [('MaKyeeGoneKyaungStreet', 0.3,120)],
    # 2min,1min
    'YwarTitGoneStreet': [('MaKyeeGoneKyaungStreet',0.3 ,120),('MaKyeeGoneStreet', 0.4,60)],
    'YoneGyiStreet': [],
    # 1min,1min
    'YoneStreet1': [('YoneStreet2', 0.0689394,60), ('NanDawKoneStreet',0.2 ,60)],
    # 2min
    'YoneStreet2': [('NanDawKoneStreet', 0.3,120)],
    # 1min
    'NanDawKoneStreet': [('ChanAyeStreet', 0.2,60)],
    # 1min
    'ChanAyeStreet': [('KanPatStreet', 0.2,60)],
    # 1min
    'KanPatStreet': [('PaungChaungZayStreet', 0.2,60)],
    # 3min
    'PaungChaungZayStreet': [('MaKyeeGoneStreet',0.8 ,180)],
    # 1min
    'MaKyeeGoneStreet': [('NanDawGone', 0.2,60)],
    # 1min
    'MaKyeeGoneKyaungStreet': [('NanDawGone', 0.1,60)],
} 
