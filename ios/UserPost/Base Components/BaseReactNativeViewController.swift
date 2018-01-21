//
//  BaseReactNativeViewController.swift
//  UserPost
//
//  Created by Miguel Cazares on 1/21/18.
//  Copyright © 2018 Miguel Cazares. All rights reserved.
//

import UIKit
import React
import LionheartExtensions

class BaseReactNativeViewController: UIViewController {
    let defaultGrayBackgroundColor = UIColor(red: 238.0 / 255.0, green: 238.0 / 255.0, blue: 238.0 / 255.0, alpha: 1.0)
    let bundleExtension = "jsbundle"
    let separator = "/"
    let debug = true
    
    var reactView: RCTRootView!
    var moduleName = defaultString
    private var bundleName = defaultString
    
    private var jsCodeLocation: URL! {
        if debug {
            return URL(string: "http://localhost:8081/\(bundleName).bundle?platform=ios&dev=true")
        }
        let bundleComponents = bundleName.components(separatedBy: separator)
        return Bundle.main.url(forResource: bundleComponents[0], withExtension: bundleExtension)
    }
    
    func setupReactView() {
        let dashCaseModuleName = moduleName.camelCaseToDashCase()
        bundleName = "\(dashCaseModuleName)\(separator)\(dashCaseModuleName)"
        
        reactView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: moduleName,
            initialProperties: nil,
            launchOptions: nil)
        
        self.view.addSubview(reactView)
        
        reactView.translatesAutoresizingMaskIntoConstraints = false
        reactView.fillWidthOfSuperview()
        reactView.fillHeightOfSuperview()
        reactView.backgroundColor = defaultGrayBackgroundColor
    }
}
